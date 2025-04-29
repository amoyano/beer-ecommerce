import React from 'react';
import ShoppingBagIcon from './icons/ShoppingBagIcon';

function AddToCartActions({ selectedVariant, onAddToCart, onShoppingBagClick }) {
  return (
    <div className="footer-actions">
      <button onClick={onShoppingBagClick} className="shopping-bag-button" aria-label="Shopping Bag">
        <ShoppingBagIcon />
      </button>
      <button
        onClick={onAddToCart}
        disabled={!selectedVariant || selectedVariant.stock === 0}
        className="add-to-cart-button"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCartActions; 