export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormState {
  isLoading: boolean;
  successMessage: string | null;
  errorMessage: string | null;
}
