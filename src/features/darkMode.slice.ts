import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: false,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      return state = action.payload
    }
  }
})

export const { setDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer
