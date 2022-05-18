import { useSelector } from "react-redux";
import "./App.css";
import Board from "./components/Board/Board";
import Heading from "./components/Heading/Heading";
import Keyboard from "./components/Keyboard/Keyboard";
import { rootState } from "./store/interface";

const rows = ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"];

function App() {
	const board = useSelector((state: rootState) => state.board.board);
	console.log(board);
	return (
		<div className="App">
			<Heading />
			<Board board={board} />
			<Keyboard rows={rows} />
		</div>
	);
}

export default App;
