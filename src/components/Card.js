import "bootstrap/dist/css/bootstrap.min.css";
import nodisponible from "../../src/nodisponible.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const Card = ({ cardData, handleNewMovie, deleteMovie }) => {
	const IMG_URL = "http://image.tmdb.org/t/p/w500/";
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				<img
					src={
						cardData.poster_path
							? `${IMG_URL}${cardData.poster_path}`
							: nodisponible
					}
					alt="Imagen de película"
				></img>

				<div className="card-body">
					<h5 style={{ minHeight: "60px" }} className="card-title">
						{cardData.title}
					</h5>
					<h6>{cardData.release_date}</h6>

					<p
						style={{
							overflow: "hidden",
							textOverflow: "elipsis",
							whiteSpace: "nowrap",
						}}
						className="card-text"
					>
						{cardData.overview}
					</p>
					<button
						onClick={() => {
							handleNewMovie(cardData);
							toast(`Añadido ${cardData.title} a favoritos!`);
						}}
						className="btn btn-primary"
					>
						Añadir a favoritos
					</button>

					<ToastContainer onClick={() => navigate("/fav")} />
				</div>
			</div>
		</>
	);
};

export default Card;
