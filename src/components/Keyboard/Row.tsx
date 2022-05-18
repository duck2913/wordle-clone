import Key from "./Key";
import classes from "./Row.module.css";

interface Props {
	rowText: string;
	rowIndex: number;
}

function Row({ rowText, rowIndex }: Props) {
	return (
		<div className={classes.row}>
			{rowIndex === 2 && <Key value="Enter"></Key>}
			{rowText.split(" ").map((character, characterIndex) => (
				<Key value={character} key={characterIndex} />
			))}
			{rowIndex === 2 && <Key value="Back"></Key>}
		</div>
	);
}

export default Row;
