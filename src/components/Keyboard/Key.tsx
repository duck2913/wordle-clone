import clasess from "./Row.module.css";

interface Props {
	value: string;
}

function Key({ value }: Props) {
	function chooseLetterHandler() {
		console.log(value);
	}

	return (
		<span className={clasess.key} onClick={chooseLetterHandler}>
			{value}
		</span>
	);
}

export default Key;
