import React from "react";
const Header = () => {
  return (
    <div className="w-100 h-20 flex items-center justify-between px-5">
      <div>
        <h1 className="text-2xl font-bold">Skin cancer diagnosis</h1>
      </div>
      <nav>
        <ul>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
