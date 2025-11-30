"use client";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post("/api/auth/phone-send-otp", {
        phone,
        password,
      });

      setMsg("Login Successful!");

      // Optional: save token
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      setMsg(error.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin} style={{ display: "grid", gap: 12 }}>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{ padding: 10, border: "1px solid #ddd" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: 10, border: "1px solid #ddd" }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {msg && <p style={{ marginTop: 10 }}>{msg}</p>}

       <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            cursor: "pointer",
          }}
        >Sumit</button>
    </div>
  );
};

export default page;
