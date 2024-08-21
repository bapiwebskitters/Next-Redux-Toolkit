// src/services/authService.ts
import { LoginData } from "../types/Auth";

// Use environment variable for base URL
const API_BASE_URL = process.env.API_BASE_URL;
const API_LOGIN_URL = `${API_BASE_URL}/auth/login`;
const API_PROFILE_URL = `${API_BASE_URL}/auth/profile`;

const login = async (loginData: LoginData) => {
  const response = await fetch(API_LOGIN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || "Failed to login.");
  }

  const { access_token } = await response.json();

  // Fetch user profile using the access token
  const profileResponse = await fetch(API_PROFILE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!profileResponse.ok) {
    throw new Error("Failed to fetch user profile.");
  }

  const user = await profileResponse.json();

  // Save user and token to localStorage
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", access_token);

  return { user, token: access_token };
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export const authService = { login, logout };
