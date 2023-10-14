const monthMap = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]
export default function getFormatedDate(date) {
	const d = new Date(date)
	return `${d.getDate()} ${monthMap[d.getMonth()]}`
}
