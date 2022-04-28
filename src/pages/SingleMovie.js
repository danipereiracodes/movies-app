import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nodisponible from "../nodisponible.jpg";

const SingleMovie = ({ handleNewMovie, deleteMovie, favorite, movies }) => {
	const { id } = useParams();
	const URL = "https://api.themoviedb.org/3/"; // Pass .env
	const IMG_URL = "http://image.tmdb.org/t/p/w500/"; //Pass .env
	const navigate = useNavigate();
	const [movieInfo, setMovieInfo] = useState(null);
	const filtered = favorite !== null ? favorite.map((f) => f.id) : [];

	useEffect(() => {
		const getSingleMovie = async () => {
			await axios
				.get(`${URL}movie/${id}`, {
					params: {
						api_key: process.env.REACT_APP_API_KEY,
					},
				})
				.then((res) => {
					const data = res;

					setMovieInfo(data.data);
				})
				.catch((error) => console.log(error));
		};
		getSingleMovie();
	}, [movieInfo, id]);

	return (
		<section className="single-movie-container">
			{movieInfo ? (
				<article className="card card-single">
					<img
						className="card-image"
						onClick={() => navigate(`/movie/${movieInfo.id}`)}
						src={
							movieInfo.poster_path
								? `${IMG_URL}${movieInfo.poster_path}`
								: nodisponible
						}
						alt="Imagen de película"
					></img>

					<section className="card-body">
						<h2 className="card-title">{movieInfo.title}</h2>
						<p>{movieInfo.overview}</p>
						<ul
							style={{
								listStyle: "none",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<li>Puntuación:{movieInfo.vote_average}</li>
							<li>Título original:{movieInfo.original_title}</li>
							<li>Lenguaje:{movieInfo.original_language}</li>
							<li>Estado:{movieInfo.status}</li>
						</ul>

						<p className="card-text card-overview">{movieInfo.overview}</p>
						{!filtered.includes(movieInfo.id) ? (
							<button
								onClick={() => {
									handleNewMovie(movieInfo);
									toast(`Añadido ${movieInfo.title} a favoritos!`);
								}}
								className="btn btn-info"
							>
								<AiOutlineHeart /> Añadir
							</button>
						) : (
							<button
								onClick={() => {
									deleteMovie(movieInfo);
									toast(`Borrado ${movieInfo.title} de favoritos!`);
								}}
								className="btn btn-info"
							>
								<AiFillHeart /> Borrar
							</button>
						)}
						<button onClick={() => navigate(-1)} className="btn">
							Volver
						</button>
						<ToastContainer onClick={() => navigate("/fav")} />
					</section>
				</article>
			) : (
				<h1>Cargando</h1>
			)}
			<ToastContainer onClick={() => navigate("/fav")} />
		</section>
	);
};

export default SingleMovie;
