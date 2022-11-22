import { createSlice } from '@reduxjs/toolkit'
import { creactAction } from "../utilities/reducer/reducer.util";

const CATEGORIES_ACTION_TYPES = {
    SET_CATEGORIES_MAP: 'categories/SET_CATEGORIES_MAP'
}

export const initialState = {
    categoriesMap: []
}


const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategoriesMap(state, action) {
            const categories = action.payload
            state.categoriesMap = categories
           /* return { ...state, categoriesMap: action.payload }*/
        }
    }
})

export const { setCategoriesMap } = categoriesSlice.actions

export default categoriesSlice.reducer