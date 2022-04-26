import "bootstrap/dist/css/bootstrap.min.css";
import nodisponible from "../../src/nodisponible.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = ({ cardData, handleNewMovie, deleteMovie }) => {
	const IMG_URL = "http://image.tmdb.org/t/p/w500/";
	const navigate = useNavigate();
	const [isFav, setIsFav] = useState();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="card" style={{ margin: "10px 15px", width: "18rem" }}>
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
					{!isFav ? (
						<button
							onClick={() => {
								handleNewMovie(cardData);
								setIsFav(true);
								toast(`Añadido ${cardData.title} a favoritos!`);
							}}
							className="btn btn-info"
							style={{ color: "white" }}
						>
							<AiOutlineHeart /> Añadir
						</button>
					) : (
						<button
							onClick={() => {
								setIsFav(false);
								deleteMovie(cardData);
								console.log("deleteMovie", deleteMovie);
								toast(`Borrado ${cardData.title} de favoritos!`);
							}}
							className="btn btn-info"
							style={{ color: "white" }}
						>
							<AiFillHeart /> Borrar
						</button>
					)}

					<ToastContainer onClick={() => navigate("/fav")} />
				</div>
			</div>
		</>
	);
};

export default Card;
