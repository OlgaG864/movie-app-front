import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks";

export default function Navbar() {
  const { toggleTheme } = useTheme();
  return (
    <>
      <div className="bg-second shadow-sm shadow-gray-500">
        <Container className=" p-2">
          <div className="flex justify-between items-center">
            <Link to="/">
              <i className="bi bi-film text-white">5 Star Movie</i>
            </Link>
            <ul className="flex items-center space-x-2">
              <li>
                <button
                  onClick={toggleTheme}
                  className="bg-dark-subtle dark:bg-white p-1 rounded"
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
                <Link
                  className="text-white font-semibold text-lg"
                  to="/auth/signin"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link className="text-white font-semibold text-lg" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}
