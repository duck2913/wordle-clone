import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Heading from "./components/Heading/Heading";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
	//prettier-ignore
	const [board, setBoard] = useState<string[]>([
        "a","b","c","","",
        "","","","","",
        "a","","","","",
        "","d","","","",
        "","","","g","",
        "","","","","f",
    ]);
	const rows = ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m Back"];
	return (
		<div className="App">
			<Heading />
			<Board board={board} />
			<Keyboard rows={rows} />
		</div>
	);
}

export default App;
