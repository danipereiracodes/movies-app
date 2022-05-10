import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FavoriteList from "../components/FavoriteList";
import SingleMovie from "../pages/SingleMovie";

const AppRoute = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<HomePage />
						</>
					}
				/>
				<Route
					path="/fav"
					element={
						<>
							<FavoriteList />
						</>
					}
				/>
				<Route
					path="/movie/:id"
					element={
						<>
							<SingleMovie />
						</>
					}
				/>
			</Routes>
		</div>
	);
};

export default AppRoute;
