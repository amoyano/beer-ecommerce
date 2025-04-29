"use client"

import { Link } from "react-router-dom"
import PlusIcon from "./icons/PlusIcon"
import StarIcon from "./icons/StarIcon"

function ProductCard({ product, onAddToCart }) {
  const formatPrice = (cents) => {
    return `$${(cents / 100).toFixed(2)}`
  }

  const rating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);

  return (
    <div className="relative">
      <Link to={`/product/${product.id}-${product.brand.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="bg-white px-4 py-2 shadow-sm rounded-lg rounded-br-xl">
          <h3 className="text-lg font-medium mb-2">{product.brand}</h3>
          <div className="flex justify-center h-28 mb-2">
            <img src={product.image || "/placeholder.svg"} alt={product.brand} className="h-full object-contain" />
          </div>

          <div className="flex items-center space-x-1 mb-1">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>

          <p className="text-xl font-bold">{formatPrice(product.price)}</p>
        </div>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault()
          onAddToCart(product)
        }}
        className="absolute rounded-tl-xl rounded-br-xl bg-orange-400 text-white p-2 rounded-md bottom-0 right-0"
      >
        <PlusIcon />
      </button>
    </div>
  )
}

export default ProductCard
