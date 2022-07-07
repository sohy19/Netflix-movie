import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Movie from "./components/Movie";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Home />}></Route>
				<Route path="/movies" element={<Movies />}>
					<Route path=":movieId" element={<Movie />} />
				</Route>
				<Route path="*" element={<div>There's nothing here!</div>} />
			</Route>
		</Routes>
	);
}

export default App;
