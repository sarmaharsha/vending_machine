import React, { useState } from "react";
import Login from "./components/Login";
import VendingMachine from "./components/VendingMachine";
import './App.css'; // Importing the CSS

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <VendingMachine />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;
