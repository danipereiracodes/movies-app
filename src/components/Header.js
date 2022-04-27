import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ handleSubmit, search, setSearch }) => {
	return (
		<header>
			<h1>MOVIE APP</h1>
			<SearchBar
				handleSubmit={handleSubmit}
				search={search}
				setSearch={setSearch}
			/>
			<nav>
				<ul>
					<li
						onClick={() => {
							window.location.reload(true);
						}}
					>
						<Link className="link-info" to="/">
							Home
						</Link>
					</li>

					<li>
						<Link className="link-info" to="/fav">
							Favoritos
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
