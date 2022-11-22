import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    currentUser: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            const user = action.payload
            state.currentUser = user
            /*return { ...state, currentUser: action.payload }; */
        }
    }
})
 
export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer