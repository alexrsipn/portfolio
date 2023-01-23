import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export interface darkModeState {
    darkMode: boolean
}

const initialState: darkModeState = {
    darkMode: false
}

export const darkModeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
        setLightMode: (state) => {
            state.darkMode = false
        },
        setDarkMode: (state) => {
            state.darkMode = true
        }
    }
})

export const {setLightMode, setDarkMode} = darkModeSlice.actions

export const darkModeSelectedValue = (state: RootState) => state.darkMode.darkMode

export default darkModeSlice.reducer