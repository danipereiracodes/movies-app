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
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<article className="card">
				<img
					src={
						cardData.poster_path
							? `${IMG_URL}${cardData.poster_path}`
							: nodisponible
					}
					alt="Imagen de película"
				></img>

				<section className="card-body">
					<h2 className="card-title">{cardData.title}</h2>
					<date>{cardData.release_date}</date>

					<p className="card-text card-overview">{cardData.overview}</p>
					{!isFav ? (
						<button
							onClick={() => {
								handleNewMovie(cardData);
								setIsFav(true);
								toast(`Añadido ${cardData.title} a favoritos!`);
								console.log(localStorage.getItem("my-favorites").length > 0);
							}}
							className="btn btn-info"
						>
							<AiOutlineHeart /> Añadir
						</button>
					) : (
						<button
							onClick={() => {
								setIsFav(false);
								deleteMovie(cardData);
								toast(`Borrado ${cardData.title} de favoritos!`);
							}}
							className="btn btn-info"
						>
							<AiFillHeart /> Borrar
						</button>
					)}

					<ToastContainer onClick={() => navigate("/fav")} />
				</section>
			</article>
		</>
	);
};

export default Card;
