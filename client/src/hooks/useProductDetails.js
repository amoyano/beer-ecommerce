import { useState, useEffect, useCallback } from "react";
import { fetchProductDetails, fetchStockPrice } from "../api/api";

const POLLING_INTERVAL = 5000; // 5 seconds

export function useProductDetails(productId) {
  const [product, setProduct] = useState(null);
  const [variants, setVariants] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setError("Invalid product ID");
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);

    const loadProductDetails = async () => {
      try {
        const data = await fetchProductDetails(productId);
        if (isMounted) {
          if (data) {
            setProduct(data);
            setVariants(data.variants);
            setSelectedVariant(data.variants.length > 0 ? data.variants[0] : null);
          } else {
            setError("Product not found");
          }
        }
      } catch (err) {
        console.error("Failed to load product details:", err);
        if (isMounted) {
          setError("Failed to load product details. Please try again later.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProductDetails();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  useEffect(() => {
    if (!selectedVariant) return;

    let isMounted = true;
    const intervalId = setInterval(async () => {
      try {
        const updatedData = await fetchStockPrice(selectedVariant.sku);
        if (isMounted && updatedData) {
          setVariants((prevVariants) =>
            prevVariants.map((variant) =>
              variant.sku === selectedVariant.sku
                ? { ...variant, price: updatedData.price, stock: updatedData.stock }
                : variant
            )
          );
          setSelectedVariant((prevSelectedVariant) => {
            if (prevSelectedVariant && prevSelectedVariant.sku === selectedVariant.sku) {
               return {
                 ...prevSelectedVariant,
                 price: updatedData.price,
                 stock: updatedData.stock,
               }
            }
            return prevSelectedVariant; 
          });
        }
      } catch (err) {
        console.error("Failed to update stock and price", err);
      }
    }, POLLING_INTERVAL);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [selectedVariant?.sku]);

  const handleVariantSelect = useCallback((variant) => {
    setSelectedVariant(variant);
  }, []);

  return {
    product,
    variants,
    selectedVariant,
    loading,
    error,
    handleVariantSelect,
  };
} 