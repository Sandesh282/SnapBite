import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and basil',
    price: 299,
    image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Pizza',
    popular: true,
    rating: 4.8,
    prepTime: '15-20 min'
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    description: 'Pizza topped with tomato sauce, mozzarella, and pepperoni',
    price: 349,
    image: 'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Pizza',
    popular: true,
    rating: 4.7,
    prepTime: '15-20 min'
  },
  {
    id: '3',
    name: 'Classic Burger',
    description: 'Beef patty with lettuce, tomato, cheese, and special sauce',
    price: 199,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Burgers',
    popular: true,
    rating: 4.6,
    prepTime: '10-15 min'
  },
  {
    id: '4',
    name: 'Vegan Burger',
    description: 'Plant-based patty with vegan cheese, lettuce, and tomato',
    price: 249,
    image: 'https://images.pexels.com/photos/3607284/pexels-photo-3607284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Burgers',
    rating: 4.4,
    prepTime: '10-15 min'
  },
  {
    id: '5',
    name: 'Caesar Salad',
    description: 'Romaine lettuce with croutons, parmesan, and caesar dressing',
    price: 179,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Salads',
    rating: 4.5,
    prepTime: '5-10 min'
  },
  {
    id: '6',
    name: 'Chicken Wings',
    description: 'Crispy chicken wings with your choice of sauce',
    price: 229,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Appetizers',
    popular: true,
    rating: 4.7,
    prepTime: '15-20 min'
  },
  {
    id: '7',
    name: 'Veggie Bowl',
    description: 'Mixed vegetables, quinoa, avocado, and tahini dressing',
    price: 199,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Healthy',
    rating: 4.6,
    prepTime: '10-15 min'
  },
  {
    id: '8',
    name: 'Chocolate Brownie',
    description: 'Warm chocolate brownie with vanilla ice cream',
    price: 129,
    image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Desserts',
    popular: true,
    rating: 4.9,
    prepTime: '5 min'
  },
  {
    id: '9',
    name: 'Salmon Sushi Roll',
    description: 'Fresh salmon with avocado and rice wrapped in seaweed',
    price: 399,
    image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Sushi',
    rating: 4.8,
    prepTime: '20 min'
  },
  {
    id: '10',
    name: 'Beef Tacos',
    description: 'Three soft shell tacos with seasoned beef, lettuce, and cheese',
    price: 279,
    image: 'https://images.pexels.com/photos/5737247/pexels-photo-5737247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mexican',
    popular: true,
    rating: 4.7,
    prepTime: '15 min'
  },
  {
    id: '11',
    name: 'Pad Thai',
    description: 'Stir-fried rice noodles with eggs, tofu, bean sprouts, and peanuts',
    price: 249,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Asian',
    rating: 4.6,
    prepTime: '20 min'
  },
  {
    id: '12',
    name: 'Chicken Curry',
    description: 'Tender chicken in a rich curry sauce served with rice',
    price: 299,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Indian',
    rating: 4.5,
    prepTime: '25 min'
  }
];

export const categories = [
  'All',
  'Pizza',
  'Burgers',
  'Salads',
  'Appetizers',
  'Healthy',
  'Desserts',
  'Sushi',
  'Mexican',
  'Asian',
  'Indian'
];