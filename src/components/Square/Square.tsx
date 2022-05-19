import classes from "./Square.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../../store/interface";

interface Props {
	value: string;
	idx: number;
}

function Square({ value, idx }: Props) {
	const colorsArray = useSelector((state: rootState) => state.board.colors);
	const status = colorsArray[idx];

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

	const colorVariants = {
		green: () => ({
			backgroundColor: "#55b755",
			transition: {
				duration: 0.2,
			},
		}),
		yellow: () => ({
			backgroundColor: "#b9b965",
			transition: {
				duration: 0.2,
			},
		}),
		grey: () => ({
			backgroundColor: "#8a8a8a",
			transition: {
				duration: 0.2,
			},
		}),
		default: () => ({}),
	};

	return (
		<motion.div
			animate={
				status === "correct"
					? "green"
					: status === "wrong-position"
					? "yellow"
					: status === "not-exist"
					? "grey"
					: "default"
			}
			variants={colorVariants}
		>
			<motion.div animate={value ? "filled" : "unfilled"} variants={variants}>
				<div className={classes.square}>{value}</div>
			</motion.div>
		</motion.div>
	);
}

export default Square;
