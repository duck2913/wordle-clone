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
    validateRow: 0,
    colors: [],
    secretWord: "HELLO",
}

export const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {
		addToBoard: (state, action) => {
			if (state.currentIdx === 29) return;
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
			//guard clause for pre
			if (!state.needToValidate) return;
			if (state.validateRow === 6) return; // preventing user enter till the 7th row
			// set need to validate to false to continue adding character to the board-
			state.needToValidate = false;
			// valide logic
			for (let index = 0; index < 5; index++) {
				if (state.secretWord[index] === state.board[5 * state.validateRow + index]) {
					state.colors.push("correct");
				} else if (state.secretWord.includes(state.board[5 * state.validateRow + index])) {
					state.colors.push("wrong-position");
				} else {
					state.colors.push("not-exist");
				}
			}
			state.validateRow++;
		},
	},
});

export const { addToBoard, deleteFromBoard, validate } = boardSlice.actions;
export default boardSlice.reducer;
