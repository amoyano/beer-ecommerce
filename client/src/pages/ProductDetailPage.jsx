"use client"

import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useProductDetails } from "../hooks/useProductDetails"
import "./ProductDetailPage.scss"
import ArrowIcon from "../components/icons/ArrowIcon"
import DotsIcon from "../components/icons/DotsIcon"
import SizeSelector from "../components/SizeSelector"
import AddToCartActions from "../components/AddToCartActions"

function ProductDetailPage() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [isExpanded, setIsExpanded] = useState(false)

  // Parse product ID from slug
  const productId = slug ? Number.parseInt(slug.split("-")[0]) : null

  // Use the custom hook for data fetching and state management
  const {
    product,
    variants,
    selectedVariant,
    loading,
    error,
    handleVariantSelect,
  } = useProductDetails(productId)

  const formatPrice = (cents) => {
    return `$${(cents / 100).toFixed(2)}`
  }

  const handleAddToCart = () => {
    if (selectedVariant && product) {
      window.alert(`Added ${product.brand} (${selectedVariant.size}) to cart`)
    } else {
      window.alert("Please select a size first.")
    }
  }

  const handleShoppingBagClick = () => {
    window.alert(`Shopping bag clicked!`)
  }

  const goBack = () => {
    navigate(-1)
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  if (loading) return <div className="loading-container"></div>
  if (error) return <div className="error-message">Error: {error}. Please try refreshing the page.</div>
  if (!product) return <div className="not-found-message">Product not found.</div>

  // Determine if description needs truncation
  const descriptionText = product?.information || ""
  const needsTruncation = descriptionText.length > 150
  const displayedDescription = needsTruncation && !isExpanded ? `${descriptionText.substring(0, 150)}...` : descriptionText

  return (
    <div className="product-detail-page">
      {/* Header */}
      <header className="header">
        <button onClick={goBack} className="back-button header-button">
          <ArrowIcon />
        </button>
        <span>Detail</span>
        <button onClick={() => { window.alert("Product options menu") }} className="header-button">
          <DotsIcon />
        </button>
      </header>

      {/* Product Content Area */}
      <div className="product-content">
        {/* Product Image */}
        <div className="product-image-container">
          <img
            src={product.image || "/images/placeholder.svg"}
            alt={product.brand}
            className="product-image"
          />
        </div>

        {/* Product Info Section */}
        <div className="product-info">
          <div className="title-price-row">
            <div className="top-content-row">
              <h1 className="product-title">{product.brand}</h1>
              <p className="product-price">
                {selectedVariant ? formatPrice(selectedVariant.price) : "-"}
              </p>
            </div>
            <div className="origin-stock-row">
              <span className="origin-info">Origin: {product.origin || 'N/A'}</span>
              <span className="stock-info">Stock: {selectedVariant?.stock ?? 'N/A'}</span>
            </div>
          </div>

          {/* Description */}
          <div className="description-section">
            <h3 className="section-title">Description</h3>
            <p className={`product-description ${isExpanded ? 'expanded' : ''}`}>
              {displayedDescription}
              {needsTruncation && (
                <button onClick={toggleExpand} className="read-more-button">
                  {isExpanded ? " Read less" : " Read more"}
                </button>
              )}
            </p>
          </div>

          {/* Size variants */}
          <SizeSelector
            variants={variants}
            selectedVariant={selectedVariant}
            onSelectVariant={handleVariantSelect}
          />

          {/* Add Actions  */}
          <AddToCartActions
            selectedVariant={selectedVariant}
            onAddToCart={handleAddToCart}
            onShoppingBagClick={handleShoppingBagClick}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
