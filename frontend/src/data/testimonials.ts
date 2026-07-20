export interface Testimonial {
  id: number;
  name: string;
  event: string;
  review: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sneha Joshi",
    event: "Birthday Celebration",
    review:
      "The cake looked even more beautiful than the pictures. Everyone loved the taste and the presentation.",
    rating: 5,
    image: "/src/assets/customers/customer1.jpg",
  },
  {
    id: 2,
    name: "Mayuri Salvi",
    event: "Wedding",
    review:
      "Beautiful craftsmanship and amazing flavour. Mandarin Bakes made our wedding even more special.",
    rating: 5,
    image: "/src/assets/customers/customer2.jpg",
  },
  {
    id: 3,
    name: "Omkar Tawade",
    event: "Anniversary",
    review:
      "Fresh, delicious and exactly how we imagined it. Highly recommended.",
    rating: 5,
    image: "/src/assets/customers/customer3.jpg",
  },
  {
    id: 4,
    name: "Ankush Ghadigaonkar",
    event: "CupCakes",
    review:
      "The cake looked even more beautiful than the pictures. Everyone loved the taste and the presentation.",
    rating: 5,
    image: "/src/assets/customers/customer3.jpg",
  },
];