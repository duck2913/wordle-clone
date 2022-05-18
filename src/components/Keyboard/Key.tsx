import clasess from "./Key.module.css";

interface Props {
	value: string;
}

function Key({ value }: Props) {
	return <span className={clasess.key}>{value}</span>;
}

export default Key;
