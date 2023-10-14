import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { getStocks, getStocksError, getStocksState } from "./features/stocks/stockSlice"
import { useEffect } from "react"
import Navbar from "./components/Navbar"
import StockTable from "./features/stocks/StockTable"
import { RiLoader3Fill as Loader } from "react-icons/ri"
import { TbFaceIdError as ErrorIcon } from "react-icons/tb"

export default function App() {
	const dispatch = useDispatch()
	const stockState = useSelector(getStocksState)
	const stockError = useSelector(getStocksError)

	useEffect(() => {
		// Fetch stocks
		dispatch(getStocks())
	}, [dispatch])

	if (stockState === "pending") {
		return (
			<div>
				<Navbar />
				<div className="center">
					<div className="loaderWrapper">
						<Loader className="loader" />
					</div>
				</div>
			</div>
		)
	}

	if (stockState === "rejected" && stockError !== null) {
		return (
			<div>
				<Navbar />
				<div className="center">
					<ErrorIcon className="errorIcon" />
					<h1 className="errorMessage">Something went wrong. Please try again.</h1>
				</div>
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
