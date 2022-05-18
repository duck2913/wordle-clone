import Key from "./Key";
import classes from "./Row.module.css";

interface Props {
	text: string;
}

function Row({ text }: Props) {
	return (
		<div className={classes.row}>
			{text.split(" ").map((character) => (
				<Key value={character} />
			))}
		</div>
	);
}

export default Row;
