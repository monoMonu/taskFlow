import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { AdminDashboard } from "./pages/adminLanding";
// import { WebSocketProvider } from "./contexts/webSocketProvider.jsx";
function App() {
  return (
    // <WebSocketProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard token={window.localStorage.getItem("token")} />
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <AdminDashboard token={window.localStorage.getItem("token")} />
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    // </WebSocketProvider>
  );
}

export default App;
