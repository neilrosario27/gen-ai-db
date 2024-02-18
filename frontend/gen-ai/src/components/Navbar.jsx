import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const NavBar = () => {
  const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-gray-800 p-3 text-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-semibold">UserAuth</span>
        </div>
        <div className="block lg:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-gray-800 lg:bg-transparent text-white p-4 lg:p-0">
          <div className="lg:flex-grow">
            {!auth && (
              <Link
                to="/login"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
              >
                Login
              </Link>
            )}
            {!auth && (
              <Link
                to="/register"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
              >
                Register
              </Link>
            )}
            {auth && (
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
              >
                Home
              </Link>
            )}
          </div>
          <div>
            {auth && (
              <button
                onClick={handleLogout}
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
              >
                LogOut
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
