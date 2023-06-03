import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../hooks";

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const { authInfo, handleLogout } = useAuth();
  const { isLoggedIn } = authInfo;
  return (
    <>
      <div className="bg-second shadow-sm shadow-gray-500">
        <Container className=" p-2">
          <div className="flex justify-between items-center">
            <Link to="/">
              <li className="text-white text-xl outline-none">
                5<i className="bi bi-stars text-xl text-white">Movie</i>
              </li>
            </Link>
            <ul className="flex items-center space-x-2">
              <li>
                <button
                  onClick={toggleTheme}
                  className="dark:bg-white bg-dark-subtle p-1 rounded"
                >
                  <i className="bi bi-brightness-high-fill"></i>
                </button>
              </li>
              <li>
                <input
                  type="text"
                  className="border-2 border-dark-subtle p-1 rounded bg-transparent text-xl outline-none focus:border-white transition text-white"
                  placeholder="search..."
                ></input>
              </li>

              <li>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="text-white font-semibold text-lg"
                  >
                    Log out
                  </button>
                ) : (
                  <Link
                    className="text-white font-semibold text-lg"
                    to="/auth/signin"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}
