import getFormatedDate from "../../utils/getFormatedDate"
import { BiSolidUpArrow as UpIcon } from "react-icons/bi"
import { BiSolidDownArrow as DownIcon } from "react-icons/bi"

export default function SingleDayData({ date, open, close, prevClose }) {
	const formatedDate = getFormatedDate(date)

	// Calculates if stock price shoud be green or red
	const openClassName = open > prevClose ? "up" : open < prevClose ? "down" : null
	const closeClassName = close > open ? "up" : close < open ? "down" : null

	return (
		<div className="singleDayData">
			<h1 className="date">{formatedDate}</h1>
			<div className="prices">
				<p className={openClassName}>
					${open}
					{openClassName === "up" ? <UpIcon /> : openClassName === "down" ? <DownIcon /> : null}
				</p>
				<p className={closeClassName}>
					${close}
					{closeClassName === "up" ? <UpIcon /> : closeClassName === "down" ? <DownIcon /> : null}
				</p>
			</div>
		</div>
	)
}
