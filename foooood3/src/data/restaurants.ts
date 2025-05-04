import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Paradise',
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: 'Italian',
    rating: 4.7,
    deliveryTime: '25-35 min',
    deliveryFee: 49,
    featured: true
  },
  {
    id: '2',
    name: 'Burger Boulevard',
    image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: 'American',
    rating: 4.5,
    deliveryTime: '15-25 min',
    deliveryFee: 39,
    featured: true
  },
  {
    id: '3',
    name: 'Sushi Sensation',
    image: 'https://images.pexels.com/photos/684965/pexels-photo-684965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: 'Japanese',
    rating: 4.8,
    deliveryTime: '30-40 min',
    deliveryFee: 59,
    featured: true
  },
  {
    id: '4',
    name: 'Taco Temple',
    image: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: 'Mexican',
    rating: 4.3,
    deliveryTime: '20-30 min',
    deliveryFee: 45
  },
  {
    id: '5',
    name: 'Pasta Palace',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: 'Italian',
    rating: 4.6,
    deliveryTime: '25-35 min',
    deliveryFee: 49
  },
  {
    id: '6',
    name: 'Curry Corner',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cuisine: 'Indian',
    rating: 4.4,
    deliveryTime: '30-45 min',
    deliveryFee: 39
  }
];