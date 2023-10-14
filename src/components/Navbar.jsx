import "./navbar.css"
import { GiHamburgerMenu as Menu } from "react-icons/gi"
export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="center">
				<h1 className="logo">StockSage</h1>
				<Menu className="menu" />
				<ul className="navlinks">
					<li className="link">Contact</li>
					<li className="link">About</li>
					<li className="link loginbtn">Login</li>
				</ul>
			</div>
		</nav>
	)
}
