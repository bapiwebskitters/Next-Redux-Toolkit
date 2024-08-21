import { RootState } from "@/redux/store";

export const selectFaqs = (state: RootState) => state.faq.faqs;
export const selectFaqStatus = (state: RootState) => state.faq.status;
export const selectFaqError = (state: RootState) => state.faq.error;
