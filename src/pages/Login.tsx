// src/components/Login.tsx
import React, { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  selectAuthErrorMessage,  selectAuthLoading} from "../redux/features/auth/authSelectors";
import { AppDispatch } from "../redux/store";
import { login } from "../redux/features/auth/authSlice";
import Link from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  // Using selectors to get state values
  const isLoading = useSelector(selectAuthLoading);
  const errorMessage = useSelector(selectAuthErrorMessage);
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password, navigate }));
  };

  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current">Blogs</li>
            </ol>
          </nav>
          <h1>Starter Page</h1>
        </div>
      </div>
      {/* End Page Title */}

      {/* Starter Section */}
      <section id="starter-section" className="starter-section section">
        <div className="container" data-aos="fade-up">
          <form onSubmit={handleLogin}>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
