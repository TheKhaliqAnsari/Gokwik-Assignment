import React from "react";
import LoginForm from "./components/LoginForm";
const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-800 lg:relative ">
      <div className="sm:bg-white sm:h-[550px] sm:border sm:border-solid sm:border-rounded w-[90%] sm:max-w-[1084px] sm:absolute sm:flex sm:flex-col ">
        <p className="hidden sm:block bottom-3 left-5 absolute max-w-32 smd:max-w-full">Need Help? <span className="text-blue-800">Contact Us</span></p>
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
