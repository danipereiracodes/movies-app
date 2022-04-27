const SearchBar = ({ search, setSearch, handleSubmit }) => {
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
				/>
				<button type="submit">Buscar</button>
			</form>
		</div>
	);
};

export default SearchBar;
