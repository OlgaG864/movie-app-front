import React from "react";
import Container from "../Container";

export default function Navbar() {
  return (
    <div>
      <div className="bg-second">
        <Container className="p-2">
          <div className="flex justify-between items-center">
            <i class="bi bi-film">5 Star Movie</i>
            <ul className="flex items-center space-x-2">
              <li>
                <button className="bg-dark-subtle p-1 rounded">
                  <i class="bi bi-brightness-high-fill"></i>
                </button>
              </li>
              <li>
                <input
                  type="text"
                  className="border-2 border-dark-subtle p-1 rounded bg-transparent text-xl outline-none focus:border-white transition text-white"
                  placeholder="search..."
                ></input>
              </li>
              <li className="text-white font-semibold text-lg">Log in</li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
}
