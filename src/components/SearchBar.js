import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import { moviesContext } from "../context/MoviesContext";

const SearchBar = () => {
	const { getMovies, setSearch, search, URL, setMovies } =
		useContext(moviesContext);

	const handleSubmit = () => {
		getMovies(search, URL, setMovies);
	};

	return (
		<div className="search-container">
			<form
				onChange={(e) => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<input
					style={{ paddingLeft: "5px" }}
					type="text"
					onChange={(e) => {
						setSearch(e.target.value);
					}}
					placeholder="Buscar películas..."
				/>
				<AiOutlineSearch style={{ color: "white", fontSize: "1.5rem" }} />
			</form>
		</div>
	);
};

export default SearchBar;
