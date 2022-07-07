import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import { getMovie } from "../movie_data";
import styles from "../css/styles.module.css";

const Movie = () => {
	// url 파라미터 사용하기
	const params = useParams(); // 문자열
	const movie = getMovie(parseInt(params.movieId));

	// 쿼리 스트링 사용하기
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const detail = searchParams.get("detail");

	const handelClick = () => {
		setSearchParams({ detail: detail === "true" ? "false" : "true" });
	};

	return (
		<div className={styles.movie}>
			<h2>{movie.title}</h2>
			<p>
				<span>감독</span>: {movie.director}
			</p>
			<p>
				<span>카테고리</span>: {movie.category}
			</p>
			<button type="button" onClick={handelClick}>
				자세히
			</button>
			{detail === "true" ? <p>{movie.detail}</p> : ""}
		</div>
	);
};

export default Movie;
