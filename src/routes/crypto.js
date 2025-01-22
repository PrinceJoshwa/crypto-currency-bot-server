// import express from "express"
// import { getCryptoPrices } from "../controllers/cryptoController.js"

// const router = express.Router()

// router.get("/prices", getCryptoPrices)

// export default router

import express from "express"
import { getCryptoPrices } from "../controllers/cryptoController.js"

const router = express.Router()

router.get("/prices", getCryptoPrices)

export default router

