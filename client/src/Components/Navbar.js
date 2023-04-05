import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>Web Developer Test</h3>
			<nav ref={navRef}>
                <Link to="/">Home</Link>
				<Link to="/celllines">CellLines</Link>
				<Link to="/psets">Psets</Link>
				<Link to="/psetstable">PsetsTable</Link>
				<Link to="/psetsmongo">PsetsMongo</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;