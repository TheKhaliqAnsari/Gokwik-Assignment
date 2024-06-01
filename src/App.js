import React from "react";
import LoginForm from "./components/LoginForm";
const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-800 lg:relative ">
      <div className="lg:bg-white lg:h-[550px] lg:border lg:border-solid lg:border-rounded lg:w-[1150px] lg:absolute lg:flex lg:flex-col ">
        <p className="bottom-5 left-5 hidden lg:block absolute ">Need Help? <a href="#">Contact Us</a></p>
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
