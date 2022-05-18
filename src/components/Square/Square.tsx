import classes from "./Square.module.css";

interface Props {
	value: string;
	idx: number;
}

function Square({ value, idx }: Props) {
	return <div className={classes.square}>{value}</div>;
}

export default Square;
