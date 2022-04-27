import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './../features/darkMode.slice'

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
    }
})
