import birthday from "../assets/collections/Birthday.jpg";
import wedding from "../assets/collections/Anniversary.jpg";
import custom from "../assets/collections/Custom.jpg";
import cupcakes from "../assets/collections/CupCakes.jpg";

export interface CollectionItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: "Popular" | "Premium" | "Best Seller" | "New";
  align: "left" | "right";
}

export const collections: CollectionItem[] = [
  {
    id: 1,
    title: "Birthday Cakes",
    subtitle: "Celebrate Every Moment",
    description:
      "Handcrafted birthday cakes made with premium ingredients and beautiful custom designs.",
    image: birthday,
    badge: "Popular",
    align: "left",
  },
  {
    id: 2,
    title: "Wedding Cakes",
    subtitle: "Made for Forever",
    description:
      "Elegant wedding cakes crafted to make your special day unforgettable.",
    image: wedding,
    badge: "Premium",
    align: "right",
  },
  {
    id: 3,
    title: "Custom Cakes",
    subtitle: "Designed Just for You",
    description:
      "Unique creations tailored to your ideas, themes, and celebrations.",
    image: custom,
    badge: "Best Seller",
    align: "left",
  },
  {
    id: 4,
    title: "Cupcakes",
    subtitle: "Small Treats, Big Happiness",
    description:
      "Freshly baked cupcakes perfect for parties, gifting, and sweet cravings.",
    image: cupcakes,
    badge: "New",
    align: "right",
  },
];