
export interface Destination {
  id: string;
  name: string;
  location: string;
  price: string;
  duration: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  emoji?: string;
}

export interface StatItem {
  label: string;
  value: string;
}
