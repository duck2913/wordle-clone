import classes from "./Square.module.css";

interface Props {
	value: string;
}

function Square({ value }: Props) {
	return <div className={classes.square}>{value}</div>;
}

export default Square;
