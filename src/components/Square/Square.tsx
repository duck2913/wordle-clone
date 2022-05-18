import classes from "./Square.module.css";
import { motion } from "framer-motion";

interface Props {
	value: string;
	idx: number;
}

function Square({ value, idx }: Props) {
	const variants = {
		filled: () => ({
			scale: [1.2, 1],
			transition: {
				duration: 0.2,
			},
		}),
		unfilled: () => ({
			scale: [1.2, 1],
			transition: {
				duration: 0.2,
			},
		}),
	};

	return (
		<motion.div animate={value ? "filled" : "unfilled"} variants={variants}>
			<div className={classes.square}>{value}</div>
		</motion.div>
	);
}

export default Square;
