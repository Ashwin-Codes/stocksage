import "./navbar.css"
export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="center">
				<h1 className="logo">StockSage</h1>
				<ul className="navlinks">
					<li className="link">Contact</li>
					<li className="link">About</li>
					<li className="link loginbtn">Login</li>
				</ul>
			</div>
		</nav>
	)
}
