// Define the interface for a blog post
export interface BlogPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface BlogState {
  posts: BlogPost[];
  selectedPost: BlogPost | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
