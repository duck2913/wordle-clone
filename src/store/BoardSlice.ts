import { createSlice } from "@reduxjs/toolkit";

//prettier-ignore
const initialState = {
    board:
        [
        "","","","","",
        "","","","","",
        "","","","","",
        "","","","","",
        "","","","","",
        "", "", "", "", "",],
    currentIdx: -1,
    needToValidate: false,
}

export const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {
		addToBoard: (state, action) => {
			if (!state.needToValidate) {
				state.currentIdx++;
				state.board[state.currentIdx] = action.payload;
			}
			if (state.currentIdx % 5 === 4) {
				state.needToValidate = true;
			}
		},
		deleteFromBoard: (state) => {
			if (state.currentIdx < 0) return;
			if (state.currentIdx % 5 === 4 && !state.needToValidate) return;
			state.needToValidate = false;
			state.board[state.currentIdx] = "";
			state.currentIdx--;
		},
		validate: (state) => {
			// valide here
			state.needToValidate = false;
		},
	},
});

export const { addToBoard, deleteFromBoard, validate } = boardSlice.actions;
export default boardSlice.reducer;
