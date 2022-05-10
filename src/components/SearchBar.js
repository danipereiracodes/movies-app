import { AiOutlineSearch } from "react-icons/ai";
import { useContext } from "react";
import { moviesContext } from "../context/MoviesContext";

const SearchBar = () => {
	const { setSearch, handleSubmit } = useContext(moviesContext);

	return (
		<div className="search-container">
			<form
				onChange={(e) => {
					handleSubmit();
					e.preventDefault();
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
