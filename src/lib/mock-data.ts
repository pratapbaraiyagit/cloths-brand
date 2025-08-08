
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: string;
  categoryName: string;
  modelUrl?: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  { id: '1', name: 'Evening Gowns', description: 'Elegant dresses for formal events.', image: 'https://images.unsplash.com/photo-1595232491873-3d35ff54a165?q=80&w=800&h=600&auto=format&fit=crop' },
  { id: '2', name: 'Cocktail Dresses', description: 'Chic and stylish dresses for parties.', image: 'https://images.unsplash.com/photo-1590403339310-8fa7f51a6907?q=80&w=800&h=600&auto=format&fit=crop' },
  { id: '3', name: 'Summer Styles', description: 'Light and airy outfits for the summer season.', image: 'https://images.unsplash.com/photo-1509375158223-c697c5dd35a2?q=80&w=800&h=600&auto=format&fit=crop' },
  { id: '4', name: 'Accessories', description: 'Complete your look with our exclusive accessories.', image: 'https://images.unsplash.com/photo-1620921443293-8a35560da54c?q=80&w=800&h=600&auto=format&fit=crop' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Seraphina Gown',
    price: 499.99,
    description: 'A breathtaking floor-length gown with intricate lace detailing and a flowing silhouette. Perfect for making a grand entrance.',
    image: 'https://images.unsplash.com/photo-1596255393243-3957268393e1?q=80&w=600&h=800&auto=format&fit=crop',
    categoryId: '1',
    categoryName: 'Evening Gowns',
  },
  {
    id: '2',
    name: 'Celeste Cocktail Dress',
    price: 249.99,
    description: 'A sparkling sequined dress that catches the light beautifully. Features a flattering A-line cut and a modern neckline.',
    image: 'https://images.unsplash.com/photo-1617922001433-418a106192dd?q=80&w=600&h=800&auto=format&fit=crop',
    categoryId: '2',
    categoryName: 'Cocktail Dresses',
  },
  {
    id: '3',
    name: 'Aurora Maxi Dress',
    price: 189.99,
    description: 'A vibrant, floral-print maxi dress made from lightweight chiffon. Ideal for beach weddings or sunny vacations.',
    image: 'https://images.unsplash.com/photo-1569091795629-848731f827a1?q=80&w=600&h=800&auto=format&fit=crop',
    categoryId: '3',
    categoryName: 'Summer Styles',
  },
  {
    id: '4',
    name: 'Luna Clutch',
    price: 129.99,
    description: 'An elegant pearl-encrusted clutch that adds a touch of sophistication to any outfit.',
    image: 'https://images.unsplash.com/photo-1579566346927-16d394184a4b?q=80&w=600&h=400&auto=format&fit=crop',
    categoryId: '4',
    categoryName: 'Accessories',
  },
  {
    id: '5',
    name: 'Rosalind Ball Gown',
    price: 699.99,
    description: 'A fairytale ball gown with layers of soft tulle and hand-sewn crystal embellishments. Truly a showstopper.',
    image: 'https://images.unsplash.com/photo-1551024224-8b940a927a7c?q=80&w=600&h=800&auto=format&fit=crop',
    categoryId: '1',
    categoryName: 'Evening Gowns',
  },
  {
    id: '6',
    name: 'Stella Bodycon Dress',
    price: 219.99,
    description: 'A sleek and modern bodycon dress in a rich velvet fabric. Designed to hug your curves in all the right places.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&h=800&auto=format&fit=crop',
    categoryId: '2',
    categoryName: 'Cocktail Dresses',
  },
    {
    id: '7',
    name: 'Soleil Sundress',
    price: 159.99,
    description: 'A charming and comfortable sundress with a playful polka-dot pattern. Perfect for a picnic or a day out.',
    image: 'https://images.unsplash.com/photo-1622533379364-321a486a45a7?q=80&w=600&h=800&auto=format&fit=crop',
    categoryId: '3',
    categoryName: 'Summer Styles',
  },
  {
    id: '8',
    name: 'Orion Earrings',
    price: 89.99,
    description: 'Dazzling drop earrings featuring celestial-inspired starbursts with crystal accents.',
    image: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?q=80&w=600&h=400&auto=format&fit=crop',
    categoryId: '4',
    categoryName: 'Accessories',
  },
];
