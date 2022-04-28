import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiPopcorn } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";

const Header = ({ handleSubmit, search, setSearch }) => {
	return (
		<header>
			<section className="header-section">
				<Link to="/">
					<h1 className="font-face-mn">
						<GiPopcorn />
						MOVIE APP
					</h1>
				</Link>
				<SearchBar
					handleSubmit={handleSubmit}
					search={search}
					setSearch={setSearch}
				/>
				<nav>
					<ul>
						<li>
							<Link className="link-info" to="/fav">
								Favoritos <AiFillHeart />
							</Link>
						</li>
					</ul>
				</nav>
			</section>
		</header>
	);
};

export default Header;
