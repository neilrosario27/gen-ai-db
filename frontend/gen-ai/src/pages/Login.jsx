import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Please fill in the fields");
        return;
      }
      const { error } = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (error) setErrorMsg(error.message);
      else navigate("/");
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white shadow-md overflow-hidden md:max-w-xl">
      <div className="p-4">
        <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>
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
          <div className="text-center mt-2">
            <button
              disabled={loading}
              type="submit"
              className={`w-1/2 px-4 py-2 text-white font-bold ${
                loading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"
              } rounded`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="text-center mt-2 text-sm">
        New User?{" "}
        <Link to={"/register"} className="text-blue-500 hover:text-blue-700">
          Register
        </Link>
      </div>
      <div className="text-center mt-2 text-sm">
        Forgot Password?{" "}
        <Link
          to={"/passwordreset"}
          className="text-blue-500 hover:text-blue-700"
        >
          Click Here
        </Link>
      </div>
    </div>
  );
};

export default Login;
