import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import Logo from "../../assets/brand.png";
const apiUrl = import.meta.env.VITE_API_URL;

const ResetPassword = () => {
  const { uid, token } = useParams(); 
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== rePassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/auth/users/reset_password_confirm/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid,
          token,
          new_password: password,
          re_new_password: rePassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Password reset failed.");
      }

      toast.success("Password reset successful!");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-indigo-300">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 shadow-lg max-w-sm w-full text-center">
        <img
          src={Logo}
          alt="Logo"
          className="mx-auto w-2/3 mb-4 cursor-pointer"
          onClick={() => navigate("/login")}
        />
        <h2 className="text-2xl  text-black mb-6">
          Reset Password
        </h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Confirm new password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 ${loading ? 'cursor-not-allowed' : ''
              }`}
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ResetPassword;
