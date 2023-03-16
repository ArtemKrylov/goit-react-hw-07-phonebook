const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

//exporting action generatores
export const { setFilter } = filterSlice.actions;

//exporting filters reducer
export const filterReducer = filterSlice.reducer;
