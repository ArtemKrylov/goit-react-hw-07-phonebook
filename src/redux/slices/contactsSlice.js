import { addContact, deleteContact, fetchContacts } from 'redux/operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

function handlePending(state) {
  state.isLoading = true;
  state.error = false;
}

function handleRejected(state, payload) {
  state.isLoading = false;
  state.error = payload;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    // addContact(state, action) {
    //   state.data = [action.payload, ...state.data];
    // },
    // deleteContact(state, action) {
    //   state.data = state.data.filter(contact => contact.id !== action.payload);
    // },
  },

  extraReducers: builder => {
    builder
      //fetchALl
      .addCase(fetchContacts.pending, state => handlePending(state))
      .addCase(fetchContacts.rejected, (state, { payload }) =>
        handleRejected(state, payload)
      )
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
      })

      //addContact
      .addCase(addContact.pending, state => handlePending(state))
      .addCase(addContact.rejected, (state, { payload }) =>
        handleRejected(state, payload)
      )
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = [payload.data, ...state.data];
      })
      //deleteContact
      .addCase(deleteContact.pending, state => handlePending(state))
      .addCase(deleteContact.rejected, (state, { payload }) =>
        handleRejected(state, payload)
      )
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = state.data.filter(
          contact => contact.id !== payload.data.id
        );
      });
  },
});

//actions
// export const { addContact, deleteContact } = contactsSlice.actions;

//reducer
export const contactsReducer = contactsSlice.reducer;
