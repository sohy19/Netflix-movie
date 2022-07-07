import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../css/reset.css";
import styles from "../css/styles.module.css";

const Header = () => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/");
	};
	return (
		<div className={styles.body}>
			<ul className={styles.menubar}>
				<li>
					<NavLink
						to="/"
						style={({ isActive }) => {
							return {
								textDecoration: isActive ? "underline" : "",
								color: isActive ? "#FF9E1B" : "",
							};
						}}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/movies"
						style={({ isActive }) => {
							return {
								textDecoration: isActive ? "underline" : "",
								color: isActive ? "#FF9E1B" : "",
							};
						}}
					>
						Movies
					</NavLink>
				</li>
			</ul>
			<div className={styles.content}>
				<Outlet />
			</div>
			<button type="button" onClick={goHome} className={styles.goHome}>
				홈으로 돌아가기
			</button>
		</div>
	);
};

export default Header;
