// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog/blogSlice";
import faqReducer from "./features/faq/faqSlice";
import skillSlice from "./features/skill/skillSlice";
import contactReducer from "./features/contact/contactSlice";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer,
    faq: faqReducer,
    skill: skillSlice,
    contact: contactReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
