interface boardState {
	board: string[];
	currentIdx: number;
}

export interface rootState {
	board: boardState;
}
