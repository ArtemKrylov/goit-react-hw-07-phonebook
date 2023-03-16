const { createSlice } = require('@reduxjs/toolkit');

const localStorageData = JSON.parse(localStorage.getItem('contacts'));
console.log('localStorageData: ', localStorageData);

const initialState = {
  data: localStorageData ?? [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.data = [action.payload, ...state.data];
    },
    deleteContact(state, action) {
      state.data = state.data.filter(contact => contact.id !== action.payload);
    },
  },
});

//actions
export const { addContact, deleteContact } = contactsSlice.actions;

//reducer
export const contactsReducer = contactsSlice.reducer;
