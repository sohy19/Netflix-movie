import React from "react";
import { getMovies } from "../movie_data";
import { Outlet, NavLink } from "react-router-dom";
import styles from "../css/styles.module.css";

const Movies = () => {
	const movies = getMovies(); // 전체 영화 데이터 할당

	return (
		<div className={styles.movies}>
			<h1>넷플릭스 영화 추천 목록</h1>
			<div className={styles.list}>
				{movies.map((movie) => (
					<NavLink
						to={`/movies/${movie.id}`}
						key={movie.id}
						style={({ isActive }) => {
							return {
								TextDecoration: isActive ? "underline" : "",
								color: isActive ? "#FF9E1B" : "",
							};
						}}
					>
						<p>{movie.title}</p>
					</NavLink>
				))}
			</div>
			<hr />
			<Outlet />
		</div>
	);
};

export default Movies;
