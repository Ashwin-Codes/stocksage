import getFormatedDate from "../../utils/getFormatedDate"

export default function SingleDayData({ date, open, close }) {
	const formatedDate = getFormatedDate(date)
	return (
		<div className="singleDayData">
			<h1 className="date">{formatedDate}</h1>
			<div className="prices">
				<p>${open}</p>
				<p>${close}</p>
			</div>
		</div>
	)
}
