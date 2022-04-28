import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
					console.log("movies", movieInfo, "data", data.data);
				})
				.catch((error) => console.log(error));
		};
		getSingleMovie();
	}, [movieInfo, id]);

	return (
		<section className="single-movie-container">
			{movieInfo ? (
				<article className="single-movie-article-container">
					<h1 id="single-movie-title">{movieInfo.title}</h1>
					<img
						src={`${IMG_URL}${movieInfo.poster_path}`}
						alt={movieInfo.title}
					></img>
					<p>{movieInfo.overview}</p>
					{!filtered.includes(movieInfo.id) ? (
						<button
							onClick={() => {
								handleNewMovie(movieInfo);
								toast(`Añadido ${movieInfo.title} a favoritos!`);
							}}
							className="btn btn-info"
						>
							Añadir <AiOutlineHeart />
						</button>
					) : (
						<button
							onClick={() => {
								deleteMovie(movieInfo);
								toast(`Borrado ${movieInfo.title} de favoritos!`);
							}}
							className="btn btn-info"
						>
							Borrar <AiFillHeart />
						</button>
					)}
					<button onClick={() => navigate("/")} className="btn btn-info">
						Volver
					</button>
				</article>
			) : (
				<h1>Cargando</h1>
			)}
			<ToastContainer onClick={() => navigate("/fav")} />
		</section>
	);
};

export default SingleMovie;
