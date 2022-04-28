import "bootstrap/dist/css/bootstrap.min.css";
import nodisponible from "../../src/nodisponible.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = ({ favorite, cardData, handleNewMovie, deleteMovie }) => {
	const IMG_URL = "http://image.tmdb.org/t/p/w500/";
	const navigate = useNavigate();

	const filtered = favorite !== null ? favorite.map((f) => f.id) : [];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<article className="card">
				<img
					className="card-image"
					onClick={() => navigate(`/movie/${cardData.id}`)}
					src={
						cardData.poster_path
							? `${IMG_URL}${cardData.poster_path}`
							: nodisponible
					}
					alt="Imagen de película"
				></img>

				<section className="card-body">
					<h2 className="card-title">{cardData.title}</h2>
					<p>{cardData.release_date}</p>

					<p className="card-text card-overview">{cardData.overview}</p>
					{!filtered.includes(cardData.id) ? (
						<button
							onClick={() => {
								handleNewMovie(cardData);
								toast(`Añadido ${cardData.title} a favoritos!`);
							}}
							className="btn btn-info"
						>
							<AiOutlineHeart /> Añadir
						</button>
					) : (
						<button
							onClick={() => {
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
