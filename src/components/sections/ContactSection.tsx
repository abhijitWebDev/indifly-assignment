'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { z } from 'zod';
import { toast } from 'react-toastify';

const ContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(6, 'Enter a valid phone number'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().optional(),
});

type ContactForm = z.infer<typeof ContactSchema>;
type FieldErrors = Partial<Record<keyof ContactForm, string>>;

// shape of server response data (optional fields included)
type ServerContactData = Partial<ContactForm & { receivedAt?: string }>;

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);

  // modal state + payload returned by server
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<ServerContactData | null>(null);

  // Clear modal on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowModal(false);
    }
    if (showModal) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const mapZodErrorsToFields = (err: z.ZodError) => {
    const result: FieldErrors = {};
    for (const issue of err.issues) {
      const path = issue.path[0] as keyof ContactForm | undefined;
      if (path) result[path] = issue.message;
    }
    return result;
  };

  const inputErrorClass = (field: keyof ContactForm) =>
    fieldErrors[field] ? 'ring-2 ring-red-400' : 'focus:ring-2 focus:ring-[#ff681e]/50';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return; // prevent double submit

    // client-side validation
    const validation = ContactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrs = mapZodErrorsToFields(validation.error);
      setFieldErrors(fieldErrs);
      toast.error('Please fix the highlighted fields.');
      return;
    }

    try {
      setLoading(true);
      setFieldErrors({});

      const res = await axios.post('/api/contact', validation.data);

      // show toast
      toast.success(res.data?.message || 'Message sent!');

      // if server returned data object, show modal with it
      if (res.data?.data && typeof res.data.data === 'object') {
        setSubmittedData(res.data.data as ServerContactData);
        setShowModal(true);
      } else {
        // if no returned data, optionally fetch the posted data from server or just show success toast
        setSubmittedData(null);
        setShowModal(false);
      }

      // reset form
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (err: any) {
      console.error(err);
      if (axios.isAxiosError(err) && err.response) {
        const api = err.response.data;
        if (api?.error && typeof api.error === 'object') {
          const newFieldErrors: FieldErrors = {};
          for (const key of Object.keys(api.error)) {
            const val = api.error[key];
            if (Array.isArray(val) && val.length > 0) newFieldErrors[key as keyof ContactForm] = val[0];
            else if (typeof val === 'string') newFieldErrors[key as keyof ContactForm] = val;
          }
          setFieldErrors(newFieldErrors);
          toast.error('Please fix the highlighted fields.');
        } else {
          toast.error(api?.message || 'Unable to send message.');
        }
      } else {
        toast.error('Network error, please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // modal card renderer
  const SubmittedCard: React.FC<{ data: ServerContactData }> = ({ data }) => {
    const rows: [string, string | undefined][] = [
      ['Name', data.name],
      ['Email', data.email],
      ['Phone', data.phone],
      ['Company', data.company],
      ['Message', data.message],
      ['Received at', data.receivedAt],
    ];

    return (
      <div className="bg-slate-900 rounded-lg p-6 max-w-md w-full shadow-2xl">
        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[#ff671f] to-[#ff915c] bg-clip-text text-transparent">Submission details</h3>
        <div className="space-y-3">
          {rows.map(([label, value]) =>
            value ? (
              <div key={label} className="flex justify-between border-b border-slate-700 pb-2">
                <div className="text-sm text-slate-400">{label}</div>
                <div className="text-sm text-white max-w-[60%] text-right break-words">{value}</div>
              </div>
            ) : null
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 rounded-md bg-gradient-to-r from-[#ff681e] to-[#ff915c] text-white font-semibold hover:opacity-90"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Contact section */}
      <section className="relative w-full min-h-[700px] sm:min-h-[750px] md:min-h-[802px] bg-[#01295c] overflow-hidden py-12 sm:py-16 md:py-20">
        {/* Decorative Vector - Top Right */}
        <div className="hidden md:block absolute right-[-50px] lg:right-[50px] top-[28px] w-[250px] h-[250px] lg:w-[308px] lg:h-[303px] opacity-60">
          <Image src="/contact-vector-1.svg" alt="" width={308} height={303} className="w-full h-full" />
        </div>

        {/* Decorative Vector - Top Center Small */}
        <div className="hidden lg:block absolute left-[636px] top-[213px] w-[24px] h-[24px] opacity-50">
          <Image src="/contact-vector-3.svg" alt="" width={24} height={24} className="w-full h-full" />
        </div>

        {/* Decorative Vector - Bottom Left */}
        <div className="hidden md:block absolute left-[-30px] lg:left-[12px] bottom-[100px] lg:bottom-[196px] w-[150px] h-[150px] lg:w-[193px] lg:h-[190px] opacity-50">
          <Image src="/contact-vector-2.svg" alt="" width={193} height={190} className="w-full h-full" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-[1154px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="w-full bg-transparent rounded-[32px] p-4 sm:p-6 md:p-8 lg:p-[42px]">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-[130px] items-start">
              {/* Left Side - Content */}
              <div className="w-full lg:w-[470px] space-y-6 sm:space-y-8">
                {/* Title */}
                <h2 className="font-montserrat font-semibold text-[40px] sm:text-[48px] md:text-[58px] leading-none capitalize bg-gradient-to-r from-[#ff671f] to-[#ff915c] bg-clip-text text-transparent">
                  Let's Talk
                </h2>

                {/* Description */}
                <p className="font-montserrat text-[16px] sm:text-[18px] md:text-[20px] text-white leading-[1.4]">
                  Reach out to us with your queries, suggestions and applications. We'd be happy to explore the next growth opportunity!
                </p>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-[22px] h-[21px] mt-1 flex-shrink-0">
                    <Image src="/location-icon.svg" alt="Location" width={22} height={21} className="w-full h-full" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-montserrat text-[18px] sm:text-[20px] text-white leading-[1.45] m-0">4074 Ebert Summit Suite 375</p>
                    <p className="font-montserrat text-[18px] sm:text-[20px] text-white leading-[1.45] m-0">Lake Leonardchester</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="w-full lg:w-[470px]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-[12px]">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      aria-invalid={!!fieldErrors.name}
                      className={`w-full h-[64px] px-5 py-4 bg-[#1b3a62] rounded-[8px] text-white font-montserrat text-[16px] placeholder-white transition-all ${inputErrorClass('name')}`}
                      style={{ boxShadow: 'inset 0px 0px 10px 0px rgba(0,0,0,0.15)' }}
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#eb5757] text-[18px] font-montserrat">*</span>
                    {fieldErrors.name && <div className="text-red-300 text-sm mt-2">{fieldErrors.name}</div>}
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      aria-invalid={!!fieldErrors.email}
                      className={`w-full h-[64px] px-5 py-4 bg-[#1b3a62] rounded-[8px] text-white font-montserrat text-[16px] placeholder-white transition-all ${inputErrorClass('email')}`}
                      style={{ boxShadow: 'inset 0px 0px 10px 0px rgba(0,0,0,0.15)' }}
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#eb5757] text-[18px] font-montserrat">*</span>
                    {fieldErrors.email && <div className="text-red-300 text-sm mt-2">{fieldErrors.email}</div>}
                  </div>

                  {/* Phone Number Field */}
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      aria-invalid={!!fieldErrors.phone}
                      className={`w-full h-[64px] px-5 py-4 bg-[#1b3a62] rounded-[8px] text-white font-montserrat text-[16px] placeholder-white transition-all ${inputErrorClass('phone')}`}
                      style={{ boxShadow: 'inset 0px 0px 10px 0px rgba(0,0,0,0.15)' }}
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#eb5757] text-[18px] font-montserrat">*</span>
                    {fieldErrors.phone && <div className="text-red-300 text-sm mt-2">{fieldErrors.phone}</div>}
                  </div>

                  {/* Company Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      aria-invalid={!!fieldErrors.company}
                      className={`w-full h-[64px] px-5 py-4 bg-[#1b3a62] rounded-[8px] text-white font-montserrat text-[16px] placeholder-white transition-all ${inputErrorClass('company')}`}
                      style={{ boxShadow: 'inset 0px 0px 10px 0px rgba(0,0,0,0.15)' }}
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[#eb5757] text-[18px] font-montserrat">*</span>
                    {fieldErrors.company && <div className="text-red-300 text-sm mt-2">{fieldErrors.company}</div>}
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={1}
                      className={`w-full h-[64px] px-5 py-4 bg-[#1b3a62] rounded-[8px] text-white font-montserrat text-[16px] placeholder-white transition-all resize-none ${inputErrorClass('message')}`}
                      style={{ boxShadow: 'inset 0px 0px 10px 0px rgba(0,0,0,0.15)' }}
                    />
                    {fieldErrors.message && <div className="text-red-300 text-sm mt-2">{fieldErrors.message}</div>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full h-[64px] rounded-[16px] font-montserrat font-semibold text-[16px] text-white bg-gradient-to-r from-[#ff681e] to-[#ff915c] hover:from-[#e04a00] hover:to-[#ff681e] transition-all duration-200 shadow-lg hover:shadow-xl ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                  >
                    {loading ? 'Sending...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* modal content */}
          <div className="relative z-10 w-full max-w-2xl mx-auto">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowModal(false)}
                className="text-white p-2 rounded-md bg-slate-800 hover:bg-slate-700"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="bg-transparent p-2 rounded-lg flex justify-center">
              {submittedData ? (
                <SubmittedCard data={submittedData} />
              ) : (
                <div className="bg-slate-900 rounded-lg p-6 max-w-md w-full shadow-2xl text-white">
                  <p>No response data available.</p>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 rounded-md bg-gradient-to-r from-[#ff681e] to-[#ff915c] text-white font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
