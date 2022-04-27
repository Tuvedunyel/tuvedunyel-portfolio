import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: false,
  reducers: {
    setDarkMode: (state, { payload }: PayloadAction<boolean>) => {
      return state = payload
    }
  }
})

export const { setDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer
