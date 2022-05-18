import clasess from "./Row.module.css";
import { useDispatch } from "react-redux";
import { addToBoard } from "../../store/BoardSlice";

interface Props {
	value: string;
}

function Key({ value }: Props) {
	const dispatch = useDispatch();

	function chooseLetterHandler() {
		dispatch(addToBoard(value.toUpperCase()));
	}

	return (
		<span className={clasess.key} onClick={chooseLetterHandler}>
			{value}
		</span>
	);
}

export default Key;
