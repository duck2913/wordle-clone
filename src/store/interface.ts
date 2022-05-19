interface boardState {
	board: string[];
	currentIdx: number;
	colors: string[];
}

export interface rootState {
	board: boardState;
}
