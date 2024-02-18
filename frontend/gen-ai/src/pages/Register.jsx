import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/client";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
      }
    } catch (error) {
      setErrorMsg("Error in Creating Account");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white shadow-md overflow-hidden md:max-w-xl">
      <div className="p-4">
        <h2 className="text-center text-2xl font-semibold mb-4">Register</h2>
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
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              ref={passwordRef}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              ref={confirmPasswordRef}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {errorMsg && (
            <div
              className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
              role="alert"
            >
              {errorMsg}
              <button
                type="button"
                className="float-right"
                onClick={() => setErrorMsg("")}
              >
                &times;
              </button>
            </div>
          )}
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
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="w-full text-center mt-2 text-sm">
        Already a User?{" "}
        <Link to={"/login"} className="text-blue-500 hover:text-blue-700">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
