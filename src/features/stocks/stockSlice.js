import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const stockSlice = createSlice({
	name: "stocks",
	initialState,
	reducers: {},
	extraReducers() {},
})

export default stockSlice.reducer
