import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsSlice";
//import { contactsReducer } from './contactsSlice';
//import { filtersReducer } from "./filtersSlices";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});


/*export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});*/




