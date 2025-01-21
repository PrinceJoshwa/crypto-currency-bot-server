import { fetchCryptoPrices } from "../services/coinGeckoService.js"

export const getCryptoPrices = async (req, res) => {
  try {
    const prices = await fetchCryptoPrices()
    res.json(prices)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch crypto prices" })
  }
}

