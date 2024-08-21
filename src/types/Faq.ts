export interface Faq {
  id: number;
  question: string;
  answer: string;
}

export interface FaqState {
  faqs: Faq[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
