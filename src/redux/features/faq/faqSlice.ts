import { Faq, FaqState } from "@/types/Faq";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state
const initialState: FaqState = {
  faqs: [],
  status: "idle",
  error: null,
};

// Create async thunk for fetching FAQs
export const fetchFaqs = createAsyncThunk("faq/fetchFaqs", async () => {
  const response = await fetch(`http://localhost:5000/faqs`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  // The response should be typed as an array of Faq objects
  return (await response.json()) as Faq[];
});

// Create the slice
const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFaqs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.faqs = action.payload;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch FAQs";
      });
  },
});


export default faqSlice.reducer;
