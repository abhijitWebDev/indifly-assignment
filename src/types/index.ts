export interface Venture {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  image?: string;
  link: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  color: string;
  position: 'center' | 'top' | 'right' | 'bottom' | 'left';
}

export interface Insight {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  link: string;
}

export interface Metric {
  value: string;
  label: string;
  icon?: string;
}