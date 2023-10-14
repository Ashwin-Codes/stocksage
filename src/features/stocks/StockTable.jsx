import "./stockTable.css"
import { useSelector } from "react-redux"
import { getAllStocks } from "./stockSlice"
import { useEffect, useState } from "react"
import SingleDayData from "./SingleDayData"

export default function StockTable() {
	const stocks = useSelector(getAllStocks)
	const [currentWeek, setCurrentWeek] = useState(0)
	const daysToShow = 7 // Total days of data to present
	const [stocksToShow, setStocksToShow] = useState(null)

	useEffect(() => {
		const idx = daysToShow * currentWeek
		const temp = []
		for (let i = idx; i < idx + daysToShow; i++) {
			temp.push(stocks[i])
		}
		setStocksToShow(temp)
	}, [currentWeek, stocks])

	function prevWeek() {
		setCurrentWeek((currentWeek) => {
			const maxPossibleWeek = parseInt(stocks.length / 7 - 1)
			if (currentWeek + 1 > maxPossibleWeek) {
				return maxPossibleWeek
			}
			return currentWeek + 1
		})
	}

	function nextWeek() {
		setCurrentWeek((currentWeek) => {
			if (currentWeek - 1 < 0) {
				return 0
			}
			return currentWeek - 1
		})
	}

	return (
		<div className="stocks">
			<h1>Week chart of {stocks[0].symbol}</h1>
			<div className="stockTable">
				<div className="tableHeadings">
					<h1 className="date">Date</h1>
					<div className="listingTitles">
						<p>Open</p>
						<p>Close</p>
					</div>
				</div>

				<div className="table">
					{stocksToShow &&
						stocksToShow.map((stock) => {
							return (
								<SingleDayData
									key={stock.date}
									date={stock.date}
									open={stock.open}
									close={stock.close}
								/>
							)
						})}
				</div>
			</div>
			<div className="weekBtns">
				<button onClick={prevWeek}>Prev Week</button>
				<button onClick={nextWeek}>Next Week</button>
			</div>
		</div>
	)
}
