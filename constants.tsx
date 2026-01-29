
import { Destination, ServiceItem, StatItem } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Kullu Manali, Himachal Pradesh',
    location: 'Himachal Pradesh',
    price: '₹20,000',
    duration: '10 Days Trip',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Rann Utsav (Kutch), Gujarat',
    location: 'Gujarat',
    price: '₹20,000',
    duration: '10 Days Trip',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Hawa Mahal (Jaipur), Rajasthan',
    location: 'Rajasthan',
    price: '₹20,000',
    duration: '10 Days Trip',
    image: 'https://images.unsplash.com/photo-1599661046289-e318878462c1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Gulmarg, Jammu & Kashmir',
    location: 'Kashmir',
    price: '₹25,000',
    duration: '7 Days Trip',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?auto=format&fit=crop&q=80&w=800'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Top Values For You',
    description: 'Try a variety of benefits when using our services.',
    icon: '🔥',
    emoji: '🔥'
  },
  {
    id: '2',
    title: 'Lot Of Choices',
    description: 'Total 460+ destinations that we work with.',
    icon: '🌍',
    emoji: '🌍'
  },
  {
    id: '3',
    title: 'Best Tour Guide',
    description: 'Our tour guide with 15+ years of experience.',
    icon: '💼',
    emoji: '💼'
  },
  {
    id: '4',
    title: 'Easy Booking',
    description: 'With an easy and fast ticket purchase process.',
    icon: '🎫',
    emoji: '🎫'
  }
];

export const STATS: StatItem[] = [
  { label: 'Holiday Package', value: '100+' },
  { label: 'Luxury Hotel', value: '230' },
  { label: 'Elite Airline', value: '12' },
  { label: 'Satisfied Traveler', value: '114M+' }
];
