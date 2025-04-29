import { useState, useEffect } from "react";
import { fetchProducts } from "../api/api";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
        setError("Failed to load products");
        // Removed window.alert as hooks shouldn't have side effects like this
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []); // Empty dependency array means this effect runs once on mount

  return { products, loading, error };
} 