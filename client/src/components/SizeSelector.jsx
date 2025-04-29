"use client"

import React from 'react';

function SizeSelector({ variants, selectedVariant, onSelectVariant }) {
  return (
    <fieldset className="size-section">
      <legend className="section-title">Size</legend>
      <div className="size-options">
        {variants.map((variant) => (
          <div key={variant.sku} className="size-option-item">
            <input
              type="radio"
              id={`variant-${variant.sku}`}
              name="size-variant"
              value={variant.sku}
              checked={selectedVariant?.sku === variant.sku}
              onChange={() => onSelectVariant(variant)}
              disabled={variant.stock === 0}
              className="sr-only"
            />
            <label
              htmlFor={`variant-${variant.sku}`}
              className={`size-option-label ${variant.stock === 0 ? "disabled" : ""}`}
            >
              {variant.size}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default SizeSelector;
