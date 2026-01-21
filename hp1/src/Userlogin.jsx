import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaMobileAlt } from "react-icons/fa";

export default function Userlogin({ setIsLoggedIn }) {
  const [mob, SetMob] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (mob === "9822057616") {
      alert("Login Success!");
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      alert("Invalid Mobile Number");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card shadow-lg border-0 p-4"
        style={{
          maxWidth: "420px",
          width: "100%",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Icon */}
        <div className="text-center mb-3">
          <FaUserCircle size={70} className="text-primary" />
        </div>

        {/* Title */}
        <h3 className="text-center fw-bold">Welcome</h3>
        <p className="text-center text-muted mb-4">
          Login to manage student data
        </p>

        {/* Input */}
        <div className="mb-3">
          <label className="form-label fw-semibold">
            <FaMobileAlt className="me-2" />
            Mobile Number
          </label>
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Enter mobile number"
            onChange={(e) => SetMob(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          className="btn btn-primary btn-lg w-100 mt-2"
          style={{ borderRadius: "30px" }}
          onClick={login}
        >
          Login
        </button>

        {/* Footer text */}
        <p className="text-center text-muted mt-4 mb-0" style={{ fontSize: "14px" }}>
          Student Data
        </p>
      </div>
    </div>
  );
}
