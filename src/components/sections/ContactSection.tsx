import React from 'react'

function ContactSection() {
  return (
    <div className="w-[1440px] h-[802px] relative bg-sky-950 overflow-hidden">
    <div className="w-48 h-48 left-[12px] top-[196px] absolute outline outline-1 outline-offset-[-0.50px] outline-blue-950"></div>
    <div className="w-80 h-72 left-[1185px] top-[28px] absolute outline outline-1 outline-offset-[-0.50px] outline-blue-950"></div>
    <div className="w-6 h-6 left-[636px] top-[213px] absolute outline outline-1 outline-offset-[-0.50px] outline-zinc-300/40"></div>
    <div className="h-[561px] p-10 left-[143px] top-[117px] absolute bg-gradient-to-l from-rose-100/20 to-rose-200/20 rounded-[32px] outline outline-1 outline-offset-[-1px] inline-flex flex-col justify-start items-start gap-2.5">
        <div className="w-[1070px] h-[469px] relative">
            <div className="w-[470px] left-[600px] top-0 absolute inline-flex flex-col justify-start items-start gap-4">
                <div className="w-[470px] h-16 bg-cyan-900 rounded-lg shadow-[inset_0px_0px_10px_0px_rgba(0,0,0,0.15)] border"></div>
                <div className="justify-start text-white text-base font-normal font-['Montserrat']">Name</div>
                <div className="justify-start text-rose-500 text-lg font-normal font-['Montserrat']">*</div>
                <div className="w-[470px] h-16 bg-cyan-900 rounded-lg shadow-[inset_0px_0px_10px_0px_rgba(0,0,0,0.15)] border"></div>
                <div className="justify-start text-white text-base font-normal font-['Montserrat']">Email</div>
                <div className="justify-start text-rose-500 text-lg font-normal font-['Montserrat']">*</div>
                <div className="w-[470px] h-16 bg-cyan-900 rounded-lg shadow-[inset_0px_0px_10px_0px_rgba(0,0,0,0.15)] border"></div>
                <div className="justify-start text-white text-base font-normal font-['Montserrat']">Phone number</div>
                <div className="justify-start text-rose-500 text-lg font-normal font-['Montserrat']">*</div>
                <div className="w-[470px] h-16 bg-cyan-900 rounded-lg shadow-[inset_0px_0px_10px_0px_rgba(0,0,0,0.15)] border"></div>
                <div className="justify-start text-white text-base font-normal font-['Montserrat']">Company name</div>
                <div className="justify-start text-rose-500 text-lg font-normal font-['Montserrat']">*</div>
                <div className="w-[470px] h-16 bg-cyan-900 rounded-lg shadow-[inset_0px_0px_10px_0px_rgba(0,0,0,0.15)] border"></div>
                <div className="w-16 h-5 justify-start text-white text-base font-normal font-['Montserrat']">Message</div>
                <div className="w-[470px] h-16 bg-gradient-to-br from-orange-600 to-orange-400 rounded-2xl"></div>
                <div className="text-center justify-start text-white text-base font-semibold font-['Montserrat']">Submit</div>
            </div>
            <div className="w-[470px] h-60 left-[40px] top-[40px] absolute">
                <div className="left-0 top-0 absolute justify-start text-orange-600 text-6xl font-semibold font-['Montserrat'] capitalize leading-[58px]">Let’s Talk</div>
                <div className="w-[470px] left-0 top-[74px] absolute justify-start text-white text-xl font-normal font-['Montserrat']">Reach out to us with your queries, suggestions and applications. We’d be happy to explore the next growth opportunity!</div>
                <div className="w-96 left-[67px] top-[178px] absolute justify-start text-white text-xl font-normal font-['Montserrat'] leading-7">4074 Ebert Summit Suite 375</div>
                <div className="w-96 left-[67px] top-[210px] absolute justify-start text-white text-xl font-normal font-['Montserrat'] leading-7">Lake Leonardchester</div>
                <div className="w-2 h-2.5 left-[3px] top-[198px] absolute outline outline-2 outline-offset-[-1px] outline-orange-500"></div>
                <div className="w-5 h-2 left-0 top-[187px] absolute outline outline-2 outline-offset-[-1px] outline-orange-500"></div>
                <div className="w-2 h-2.5 left-[14px] top-[197px] absolute outline outline-2 outline-offset-[-1px] outline-orange-500"></div>
                <div className="w-0.5 h-0.5 left-[17px] top-[200px] absolute bg-gradient-to-br from-purple-600 to-orange-500 rounded-full border-orange-500"></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ContactSection