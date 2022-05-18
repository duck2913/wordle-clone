import classes from "./Keyboard.module.css";
import Row from "./Row";
import "./Row.module.css";

interface Props {
	rows: string[];
}

function Keyboard({ rows }: Props) {
	return (
		<div className={classes.keyboard}>
			{rows.map((rowText, rowIndex) => {
				return <Row rowText={rowText} rowIndex={rowIndex} key={rowIndex} />;
			})}
		</div>
	);
}

export default Keyboard;
