import { Skill, SkillState } from "@/types/Skill";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state
const initialState: SkillState = {
  skills: [],
  status: "idle",
  error: null,
};

// Create async thunk for fetching Skills
export const fetchSkills = createAsyncThunk("skill/fetchSkills", async () => {
  const response = await fetch(`http://localhost:5000/skills`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  // The response should be typed as an array of Faq objects
  return (await response.json()) as Skill[];
});

// Create the slice
const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.skills = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch FAQs";
      });
  },
});

export default skillSlice.reducer;
