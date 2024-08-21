import { BlogPost, BlogState } from "@/types/Blog";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state with an additional selectedPost
const initialState: BlogState = {
  posts: [],
  selectedPost: null,
  status: "idle",
  error: null,
};

// Create an async thunk for fetching a single blog post
export const fetchBlogPost = createAsyncThunk(
  "blog/fetchBlogPost",
  async (blogId: number) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${blogId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as BlogPost;
  }
);

// Create the slice
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchPostsStart(state) {
      state.status = "loading";
    },
    fetchPostsSuccess(state, action: PayloadAction<BlogPost[]>) {
      state.posts = action.payload;
      state.status = "succeeded";
    },
    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.status = "failed";
    },
    addPost(state, action: PayloadAction<BlogPost>) {
      state.posts.push(action.payload);
    },
    updatePost(state, action: PayloadAction<BlogPost>) {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    // Add reducers for handling fetchBlogPost
    setSelectedPost(state, action: PayloadAction<BlogPost | null>) {
      state.selectedPost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogPost.fulfilled, (state, action) => {
        state.selectedPost = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchBlogPost.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch blog post";
        state.status = "failed";
      });
  },
});

// Export the actions for use in components
export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  addPost,
  updatePost,
  deletePost,
  setSelectedPost,
} = blogSlice.actions;

export default blogSlice.reducer;
