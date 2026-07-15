import cake1 from "../assets/gallery/cake1.jpg";
import cake2 from "../assets/gallery/cake2.jpg";
import cake3 from "../assets/gallery/cake3.jpg";
import cake4 from "../assets/gallery/cake4.jpg";
import cake5 from "../assets/gallery/cake5.jpg";
import cake6 from "../assets/gallery/cake6.jpg";
import cake7 from "../assets/gallery/cake7.jpg";
import cake8 from "../assets/gallery/cake8.jpg";

export const galleryCategories = [
  "All",
  "Birthday",
  "Wedding",
  "Custom",
  "Anniversary",
] as const;

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: "Birthday" | "Wedding" | "Custom" | "Anniversary";
  type: "Egg" | "Eggless";
  badge: "Best Seller" | "Popular" | "New";
  image: string;
}

export const galleryImages: GalleryItem[] = [
  {
    id: 1,
    image: cake1,
    title: "Chocolate Delight",
    description: "Rich chocolate sponge layered with silky ganache frosting.",
    category: "Birthday",
    type: "Eggless",
    badge: "Best Seller",
  },
  {
    id: 2,
    image: cake2,
    title: "Royal Wedding Cake",
    description: "Elegant multi-tier wedding cake handcrafted for special celebrations.",
    category: "Wedding",
    type: "Egg",
    badge: "Popular",
  },
  {
    id: 3,
    image: cake3,
    title: "Floral Theme",
    description: "Beautiful floral design made for birthdays and custom occasions.",
    category: "Custom",
    type: "Eggless",
    badge: "New",
  },
  {
    id: 4,
    image: cake4,
    title: "Red Velvet",
    description: "Soft red velvet sponge with smooth cream cheese frosting.",
    category: "Birthday",
    type: "Egg",
    badge: "Best Seller",
  },
  {
    id: 5,
    image: cake5,
    title: "Anniversary Special",
    description: "A romantic cake crafted to make anniversaries unforgettable.",
    category: "Anniversary",
    type: "Eggless",
    badge: "Popular",
  },
  {
    id: 6,
    image: cake6,
    title: "Classic Vanilla",
    description: "Classic vanilla sponge topped with fresh whipped cream.",
    category: "Custom",
    type: "Egg",
    badge: "New",
  },
  {
    id: 7,
    image: cake7,
    title: "Fruit Fantasy",
    description: "Fresh fruit toppings with light cream for a refreshing taste.",
    category: "Birthday",
    type: "Eggless",
    badge: "Popular",
  },
  {
    id: 8,
    image: cake8,
    title: "Elegant White",
    description: "Minimal white cake with luxurious handcrafted decorations.",
    category: "Wedding",
    type: "Eggless",
    badge: "Best Seller",
  },
];