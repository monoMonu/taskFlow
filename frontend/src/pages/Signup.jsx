import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../components/auth/AuthLayout";
import { InputField } from "../components/auth/InputField";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://taskflow-ez1n.onrender.com/signup", {
        name,
        email,
        password,
      });
      const token = response.data.token;
      window.localStorage.setItem("token", token);
      window.location.href = "/admin/dashboard";
    } catch (err) {
      console.log("user already exist");
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Already have an account? Sign in instead"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <InputField
          label="Full name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create account
          </button>
        </div>

        <div className="text-sm text-center">
          <span className="text-gray-600">Already have an account?</span>{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};
