// import express from "express"
// import cors from "cors"
// import dotenv from "dotenv"
// import cryptoRoutes from "./routes/crypto.js"

// dotenv.config()

// const app = express()
// const PORT = process.env.PORT || 5000

// app.use(cors({
//     origin: 'https://crypto-currency-bot-client.vercel.app' 
// }));

// app.use(cors());

// app.use(express.json());

// app.use("/api/crypto", cryptoRoutes)

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })

import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cryptoRoutes from "./routes/crypto.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Configure CORS
app.use(
  cors({
    origin: ["https://crypto-currency-bot-client.vercel.app", "http://localhost:3000"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
)

app.use(express.json())

// Add a test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Server is working!" })
})

app.use("/api/crypto", cryptoRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: "Something went wrong!", details: err.message })
})

// Catch-all route
app.get("*", (req, res) => {
  res.status(404).json({ error: "Not Found" })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app

