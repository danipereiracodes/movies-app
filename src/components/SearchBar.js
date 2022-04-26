const SearchBar = ({ search, setSearch, handleSubmit }) => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<form
				onSubmit={(e) => {
					handleSubmit();
					e.preventDefault();
				}}
			>
				<input
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
