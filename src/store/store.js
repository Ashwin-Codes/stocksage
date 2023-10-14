import { configureStore } from "@reduxjs/toolkit"
import stockSlice from "../features/stocks/stockSlice"

const store = configureStore({
	reducer: {
		stocks: stockSlice,
	},
})

export default store
