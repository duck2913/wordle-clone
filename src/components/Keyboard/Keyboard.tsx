import classes from "./Keyboard.module.css";
import Row from "./Row";

interface Props {
	rows: string[];
}

function Keyboard({ rows }: Props) {
	return (
		<div className={classes.keyboard}>
			{rows.map((rowText) => (
				<Row text={rowText} />
			))}
		</div>
	);
}

export default Keyboard;
