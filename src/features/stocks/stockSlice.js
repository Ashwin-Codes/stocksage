import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import endpoints from "../../configs/endpoints"

const initialState = {
	stocks: {},
	error: null,
	state: "pending",
}

export const getStocks = createAsyncThunk("stocks/getStocks", async () => {
	const allShares = await fetch(endpoints.allShares)
	return await allShares.json()
})

const stockSlice = createSlice({
	name: "stocks",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getStocks.fulfilled, (state, action) => {
				state.state = "fulfilled"
				if (action?.payload?.error) {
					state.error = action.payload.error
					return
				}
				state.stocks = action.payload
			})
			.addCase(getStocks.rejected, (state, action) => {
				state.state = "rejected"
				state.error = action.error
			})
	},
})

export default stockSlice.reducer
