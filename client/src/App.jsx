import { Routes, Route } from "react-router-dom"
import ProductListingPage from "./pages/ProductListingPage"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/product/:slug" element={<ProductDetailPage />} />
    </Routes>
  )
}

export default App
