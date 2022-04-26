import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

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
			<h1>Buscador de Películas</h1>
			<SearchBar
				handleSubmit={handleSubmit}
				search={search}
				setSearch={setSearch}
			/>
			<div
				style={{ display: "flex", margin: "1rem", justifyContent: "center" }}
			>
				<Link
					to="/"
					onClick={() => {
						handleSubmit();
						setSearch("a");
					}}
				>
					Home
				</Link>
				<Link to="/fav">Favoritos</Link>
			</div>
		</header>
	);
};

export default Header;
