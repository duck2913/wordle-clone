import Square from "../Square/Square";
import classes from "./Board.module.css";

interface Props {
	board: string[];
}

function Board({ board }: Props) {
	return (
		<div className={classes.board}>
			{board.map((value, idx) => {
				return <Square value={value} idx={idx} key={idx} />;
			})}
		</div>
	);
}

export default Board;
