"use client"

import { useState } from "react"
import { useProducts } from "../hooks/useProducts"
import ProductCard from "../components/ProductCard"
import Header from "../components/Header"
import LoadingIcon from "../components/icons/LoadingIcon"

function ProductListingPage() {
  const { products, loading, error } = useProducts()
  const [user, setUser] = useState({ name: "Michael" })

  const handleAddToCart = (product) => {
    window.alert(`Added ${product.brand} to cart`)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingIcon className="w-12 h-12 text-orange-400" />
      </div>
    )
  }

  if (error) return <div className="p-4 text-center text-red-500">{error}</div>

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-8">
      {/* Header */}
      <Header user={user} />

      {/* Welcome section */}
      <section className="px-4 pt-2 pb-6">
        <p className="text-gray-400 text-lg">Hi Mr. {user.name},</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-1">Welcome Back!</h1>
      </section>

      {/* Products section */}
      <section className="px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Products</h2>

        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductListingPage
