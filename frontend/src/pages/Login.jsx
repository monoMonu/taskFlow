import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../components/auth/AuthLayout";
import { InputField } from "../components/auth/InputField";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://taskflow-ez1n.onrender.com/login", {
        email,
        password,
      });
      const token = response.data.token;
      console.log(response.data)
      window.localStorage.setItem("token", token);
      if (response.data.user.role === "Admin") {
        window.location.href = "/admin/dashboard";
      } else if (response.data.user.role === "Member") {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthLayout
      title="Sign in to your account"
      subtitle="Or create a new account if you don't have one"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <InputField
          label="Email address"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>

        <div className="text-sm text-center">
          <span className="text-gray-600">Don't have an account?</span>{" "}
          <Link
            to="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
