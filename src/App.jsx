import { useDispatch } from "react-redux"
import { getStocks } from "./features/stocks/stockSlice"
import { useEffect } from "react"
export default function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		// Fetch stocks
		dispatch(getStocks())
	}, [dispatch])

	return <div>App</div>
}
