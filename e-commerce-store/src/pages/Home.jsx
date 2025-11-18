// src/pages/Home.jsx
import react from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return products;
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="flex-1 p-4">
      {/* Keep Navbar usage outside or inside App */}
      <div className="mb-6">
        {/* Search input local to Home */}
        <div className="w-full max-w-lg">
          <input
            className="form bg-white"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {filtered.map((p) => (
          <Link
            to={`/product/${p.id}`}
            key={p.id}
            state={{ product: p }}
            className="w-full"
          >
            <ProductCard product={p} />
          </Link>
        ))}
      </div>
    </div>
  );
}
