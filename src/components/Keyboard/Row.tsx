import Key from "./Key";
import classes from "./Row.module.css";
import { useDispatch } from "react-redux";
import { deleteFromBoard, validate } from "../../store/BoardSlice";

interface Props {
	rowText: string;
	rowIndex: number;
}

function Row({ rowText, rowIndex }: Props) {
	const dispatch = useDispatch();

	function validateHandler() {
		dispatch(validate());
	}

	function deleteCharacterHandler() {
		dispatch(deleteFromBoard());
	}

	return (
		<div className={classes.row}>
			{rowIndex === 2 && (
				<div className={classes.key} onClick={validateHandler}>
					Enter
				</div>
			)}
			{rowText.split(" ").map((character, characterIndex) => (
				<Key value={character} key={characterIndex} />
			))}
			{rowIndex === 2 && (
				<div className={classes.key} onClick={deleteCharacterHandler}>
					Back
				</div>
			)}
		</div>
	);
}

export default Row;
