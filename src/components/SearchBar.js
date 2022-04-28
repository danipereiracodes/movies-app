import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ setSearch, handleSubmit }) => {
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
