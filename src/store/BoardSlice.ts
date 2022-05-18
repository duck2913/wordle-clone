import { createSlice } from "@reduxjs/toolkit";

//prettier-ignore
const initialState = {
    board:
        [
        "a","b","c","","",
        "","","","","",
        "","","","","",
        "","","","","",
        "","","","","",
        "","","","","",]
}

export const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {
		setBoard: (state, action) => {
			state.board = action.payload;
		},
	},
});

export const { setBoard } = boardSlice.actions;
export default boardSlice.reducer;
