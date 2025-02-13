import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYouPage() {
  const navigate = useNavigate();

  // Auto-redirect to home after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold text-green-500">Thank You! 🎉</h1>
      <p className="text-lg mt-2">Your message has been sent successfully.</p>
      <p className="text-gray-500 mt-4">Redirecting to home...</p>
    </div>
  );
}
