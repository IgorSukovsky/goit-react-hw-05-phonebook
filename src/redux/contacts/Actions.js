import { createAction } from "@reduxjs/toolkit";

const addNewToList = createAction("list/addToList");
const deletedItem = createAction("list/deletedItem");
const filterChange = createAction("filter/filterChange", (payload) => ({
  payload: payload.target.value,
}));

export { addNewToList, deletedItem, filterChange };
// =====================================OLD

// const ADD_TO_CONTACTS = "contacts/addContacts";
// const REMOVE_FROM_CONTACTS = "contacts/removeContacts";
// const FILTER_CONTACTS = "contacts/filterContacts";

// export { ADD_TO_CONTACTS, REMOVE_FROM_CONTACTS, FILTER_CONTACTS };

// const addContact = (contact) => ({
//   type: ADD_TO_CONTACTS,
//   payload: contact,
// });

// const removeContact = (id) => ({
//   type: REMOVE_FROM_CONTACTS,
//   payload: id,
// });

// const filterContacts = (payload) => ({
//   type: FILTER_CONTACTS,
//   payload: payload.target.value,
// });

// export { addContact, removeContact, filterContacts };
