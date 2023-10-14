import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { getStocks, getStocksState } from "./features/stocks/stockSlice"
import { useEffect } from "react"
import Navbar from "./components/Navbar"
import StockTable from "./features/stocks/StockTable"

export default function App() {
	const dispatch = useDispatch()
	const stockState = useSelector(getStocksState)
	useEffect(() => {
		// Fetch stocks
		dispatch(getStocks())
	}, [dispatch])

	if (stockState === "pending") {
		return (
			<div>
				<Navbar />
				<div className="center">Loading...</div>
			</div>
		)
	}

	return (
		<div>
			<Navbar />
			<div className="center">{stockState === "fulfilled" ? <StockTable /> : null}</div>
		</div>
	)
}
