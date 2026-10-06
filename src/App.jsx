import { useState } from "react";
import "./App.css";

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="app">
      <div className="card">

        <div className="logo">
          🎓
        </div>

        <h1>Campus Connect</h1>

        <p className="subtitle">
          Student Collaboration & Opportunity Platform
        </p>

        {!showRegister ? (
          <>
            <h2>Welcome Back 👋</h2>

            <input
              type="email"
              placeholder="Email"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button>Login</button>

            <p className="switch">
              Don't have an account?
              <span onClick={() => setShowRegister(true)}>
                {" "}Register
              </span>
            </p>
          </>
        ) : (
          <>
            <h2>Create Account 📝</h2>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <input
              type="text"
              placeholder="College"
            />

            <input
              type="text"
              placeholder="Branch"
            />

            <button>Register</button>

            <p className="switch">
              Already have an account?
              <span onClick={() => setShowRegister(false)}>
                {" "}Login
              </span>
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default App;
