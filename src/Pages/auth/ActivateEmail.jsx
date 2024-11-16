import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import Logo from "../../assets/brand.png";
const apiUrl = import.meta.env.VITE_API_URL;


const ActivateEmail = () => {
  const navigate = useNavigate();
  const { uid, token } = useParams();  
  const [pageLoading, setPageLoading] = useState(true);
  const [activationStatus, setActivationStatus] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false,
  });

  // Activation function
  const activateUser = async ({ uid, token }) => {
    setActivationStatus({ isLoading: true, isError: false, isSuccess: false });

    try {
      const response = await fetch(`${apiUrl}/api/auth/users/activation/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid, token }),
      });

      if (!response.ok) {
        throw new Error("Activation failed");
      }

      setActivationStatus({ isLoading: false, isError: false, isSuccess: true });

      toast.success("Email activated successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setActivationStatus({ isLoading: false, isError: true, isSuccess: false });

      toast.error("Email activation failed");
    }
  };

  useEffect(() => {
    if (!uid || !token) {
      setPageLoading(false);
      toast.error("You don't have permission to access the activation page");
      return;
    }

    if (uid && token) {
      setPageLoading(false);
      activateUser({ uid, token });
    }
  }, [uid, token]);

  const { isLoading, isError, isSuccess } = activationStatus;

  if (pageLoading || isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-indigo-200">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-indigo-200">
      <div className="bg-white/30 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-lg max-w-sm w-full text-center">
        <img
          src={Logo}
          alt="Logo"
          className="mx-auto mb-4 cursor-pointer"
          onClick={() => navigate("/login")}
        />
        <hr className="mb-6 border-gray-300" />

        {isSuccess && (
          <h2 className="text-xl font-bold text-blue-500">
            Thank you for Activating your Email
          </h2>
        )}
        {isError && (
          <h2 className="text-xl font-bold text-red-500">
            Email Activation Failed !!
          </h2>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ActivateEmail;
