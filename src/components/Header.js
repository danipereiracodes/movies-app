import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ handleSubmit, search, setSearch }) => {
	return (
		<header
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1>MOVIE APP</h1>
			<SearchBar
				handleSubmit={handleSubmit}
				search={search}
				setSearch={setSearch}
			/>
			<div
				style={{ display: "flex", margin: "1rem", justifyContent: "center" }}
			>
				<Link className="link-info" to="/">
					Home
				</Link>
				<Link className="link-info" to="/fav">
					Favoritos
				</Link>
			</div>
		</header>
	);
};

export default Header;
