const express = require("express")
const path = require("path")
const cors = require("cors")
const products = require("./products")
const stockPrice = require("./stock-price")

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  }),
)
app.use(express.json())

// Serve static files from the 'public' directory
app.use("/product-images", express.static(path.join(__dirname, "public/product-images")))

// API endpoint for products
app.get("/api/products", (req, res) => {
  res.json(products)
})

// API endpoint for stock-price
app.get("/api/stock-price/:sku", (req, res) => {
  const { sku } = req.params
  const stockPriceInfo = stockPrice[sku]

  if (stockPriceInfo) {
    res.json(stockPriceInfo)
  } else {
    res.status(404).json({ error: "SKU not found" })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
