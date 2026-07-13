import type { Cake } from "../../../types/cake";

interface CakeCardProps {
  cake: Cake;
}

const CakeCard = ({ cake }: CakeCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={cake.image}
        alt={cake.name}
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold text-[var(--color-brand-brown)]">
          {cake.name}
        </h3>

        <p className="mb-4 text-gray-600">
          {cake.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-semibold text-[var(--color-brand-gold)]">
            {cake.price}
          </span>

          <button className="rounded-full bg-[var(--color-brand-gold)] px-5 py-2 text-white transition hover:bg-[var(--color-brand-gold-dark)]">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;