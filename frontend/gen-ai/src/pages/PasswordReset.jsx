import { useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await passwordReset(emailRef.current.value);
      if (!error) {
        setMsg("Password reset has been sent to your email");
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white shadow-md overflow-hidden md:max-w-xl">
      <div className="p-4">
        <h2 className="text-center text-2xl font-semibold mb-4">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              ref={emailRef}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {msg && (
            <div
              className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg"
              role="alert"
            >
              {msg}
              <button
                type="button"
                className="float-right"
                onClick={() => setMsg("")}
              >
                &times;
              </button>
            </div>
          )}
          <div className="text-center mt-2">
            <button
              disabled={loading}
              type="submit"
              className={`w-1/2 px-4 py-2 text-white font-bold ${
                loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
              } rounded`}
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
      <div className="text-center mt-2 text-sm">
        Back to Login?{" "}
        <Link to={"/login"} className="text-blue-500 hover:text-blue-700">
          Login
        </Link>
      </div>
    </div>
  );
};

export default PasswordReset;
