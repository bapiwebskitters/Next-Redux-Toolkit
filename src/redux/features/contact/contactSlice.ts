import { ContactForm, ContactFormState } from "@/types/ContactUs";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: ContactFormState = {
  isLoading: false,
  successMessage: null,
  errorMessage: null,
};

// Async thunk to handle form submission
export const submitContactForm = createAsyncThunk(
  "contact/submitForm",
  async (formData: ContactForm) => {
    const response = await fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit the form.");
    }

    return "Your message has been sent. Thank you!";
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    clearMessages(state) {
      state.successMessage = null;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isLoading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message || "Something went wrong.";
      });
  },
});

export const { clearMessages } = contactSlice.actions;

export default contactSlice.reducer;
