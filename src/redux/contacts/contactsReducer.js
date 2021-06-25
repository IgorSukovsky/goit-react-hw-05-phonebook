import { createReducer } from "@reduxjs/toolkit";
import { addNewToList, deletedItem, filterChange } from "./Actions";

const initialState = {
  items: [],
  filter: "",
};

const contactsReducer = createReducer(initialState, {
  [addNewToList]: (state, action) => ({
    ...state,
    items: [action.payload, ...state.items],
  }),
  [deletedItem]: (state, action) => ({
    ...state,
    items: state.items.filter((item) => item.id !== action.payload),
  }),
  [filterChange]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});

export default contactsReducer;

// =====================================OLD

// import {
//   ADD_TO_CONTACTS,
//   REMOVE_FROM_CONTACTS,
//   FILTER_CONTACTS,
// } from "./Actions";

// const initialState = {
//   items: [],
//   filter: "",
// };

// const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CONTACTS:
//       return { ...state, items: [action.payload, ...state.items] };

//     case REMOVE_FROM_CONTACTS:
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };

//     case FILTER_CONTACTS:
//       return { ...state, filter: action.payload };

//     default:
//       return state;
//   }
// };

// export default contactsReducer;
