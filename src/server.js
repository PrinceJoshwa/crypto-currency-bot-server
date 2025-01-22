import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cryptoRoutes from "./routes/crypto.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
    origin: [
      process.env.CLIENT_URL,
      'https://crypto-currency-bot-client.vercel.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
app.use(express.json());

app.use("/api/crypto", cryptoRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

