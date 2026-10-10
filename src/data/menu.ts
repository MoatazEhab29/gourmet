export type MenuCategory =
  | 'Starters'
  | 'Gourmet Mains'
  | 'Pastas & Risottos'
  | 'Signature Desserts'
  | 'Drinks';

export type DietaryTag = 'Vegetarian';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  dietary: DietaryTag[];
  image: string;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Truffle Beef Tartare',
    description: 'Hand-cut prime beef, quail egg yolk, shaved black truffle, crostini, micro herbs.',
    price: '$18',
    category: 'Starters',
    dietary: [],
    image: 'https://images.pexels.com/photos/6488855/pexels-photo-6488855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popular: true,
  },
  {
    id: 2,
    name: 'Artisan Canapé Selection',
    description: 'Curated trio of smoked salmon, foie gras, and heirloom tomato bruschetta.',
    price: '$14',
    category: 'Starters',
    dietary: ['Vegetarian'],
    image: 'https://images.pexels.com/photos/12775025/pexels-photo-12775025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 3,
    name: 'Crispy Polenta Bites',
    description: 'Golden polenta cubes, truffle aioli, aged parmesan, fresh basil oil.',
    price: '$12',
    category: 'Starters',
    dietary: ['Vegetarian'],
    image: 'https://images.pexels.com/photos/39122376/pexels-photo-39122376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 4,
    name: 'Ribeye on the Stone',
    description: '300g dry-aged ribeye, smoked sea salt, bone marrow butter, charred shallots.',
    price: '$48',
    category: 'Gourmet Mains',
    dietary: [],
    image: 'https://images.pexels.com/photos/28245163/pexels-photo-28245163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popular: true,
  },
  {
    id: 5,
    name: 'Grilled Filet Mignon',
    description: 'Tender filet, peppercorn cognac sauce, roasted root vegetables, potato gratin.',
    price: '$42',
    category: 'Gourmet Mains',
    dietary: [],
    image: 'https://images.pexels.com/photos/38895885/pexels-photo-38895885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 6,
    name: 'Surf & Turf Platter',
    description: 'Grilled lobster tail and sirloin, garlic herb butter, seasonal greens.',
    price: '$55',
    category: 'Gourmet Mains',
    dietary: [],
    image: 'https://images.pexels.com/photos/11374421/pexels-photo-11374421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 7,
    name: 'Sizzling Sirloin',
    description: 'Cast-iron sirloin, blistered cherry tomatoes, asparagus, red wine reduction.',
    price: '$36',
    category: 'Gourmet Mains',
    dietary: [],
    image: 'https://images.pexels.com/photos/17130434/pexels-photo-17130434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 8,
    name: 'Spaghetti Pomodoro',
    description: 'House-made spaghetti, San Marzano tomato, fresh basil, aged pecorino.',
    price: '$22',
    category: 'Pastas & Risottos',
    dietary: ['Vegetarian'],
    image: 'https://images.pexels.com/photos/12039747/pexels-photo-12039747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 9,
    name: 'Chicken & Mushroom Tagliatelle',
    description: 'Slow-roasted chicken, wild mushrooms, cream sauce, shaved parmesan.',
    price: '$24',
    category: 'Pastas & Risottos',
    dietary: [],
    image: 'https://images.pexels.com/photos/17636472/pexels-photo-17636472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popular: true,
  },
  {
    id: 10,
    name: 'Shrimp Linguine',
    description: 'Tiger shrimp, linguine, spicy tomato sugo, garlic, fresh parsley.',
    price: '$28',
    category: 'Pastas & Risottos',
    dietary: [],
    image: 'https://images.pexels.com/photos/27976900/pexels-photo-27976900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 11,
    name: 'Dark Chocolate Délice',
    description: 'Valrhona chocolate ganache, raspberry coulis, gold leaf, cocoa crumble.',
    price: '$14',
    category: 'Signature Desserts',
    dietary: ['Vegetarian'],
    image: 'https://images.pexels.com/photos/35546720/pexels-photo-35546720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popular: true,
  },
  {
    id: 12,
    name: 'Strawberry Pavlova',
    description: 'Crisp meringue, vanilla cream, macerated strawberries, edible flowers.',
    price: '$12',
    category: 'Signature Desserts',
    dietary: ['Vegetarian'],
    image: 'https://images.pexels.com/photos/18784859/pexels-photo-18784859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 13,
    name: 'Mint Chocolate Affair',
    description: 'Mint ice cream, warm chocolate fondant, cherry sauce, crushed pistachio.',
    price: '$13',
    category: 'Signature Desserts',
    dietary: ['Vegetarian'],
    image: 'https://images.pexels.com/photos/39332801/pexels-photo-39332801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 14,
    name: 'Smoked Old Fashioned',
    description: 'Bourbon, applewood smoke, bitters, demerara, orange peel.',
    price: '$16',
    category: 'Drinks',
    dietary: ['Vegetarian'],
    image: 'https://images.pexels.com/photos/8551435/pexels-photo-8551435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    popular: true,
  },
  {
    id: 15,
    name: 'Bistro Signature Martini',
    description: 'Botanical gin, dry vermouth, olive brine, lemon twist, sea salt rim.',
    price: '$15',
    category: 'Drinks',
    dietary: ['Vegetarian'],
    image: 'https://images.pexels.com/photos/31893699/pexels-photo-31893699.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 16,
    name: 'Ambient Bar Flight',
    description: 'Curated trio of craft cocktails — bartender\'s choice, seasonal.',
    price: '$28',
    category: 'Drinks',
    dietary: ['Vegetarian'],
    image: 'https://images.pexels.com/photos/12049548/pexels-photo-12049548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const categories: MenuCategory[] = [
  'Starters',
  'Gourmet Mains',
  'Pastas & Risottos',
  'Signature Desserts',
  'Drinks',
];
