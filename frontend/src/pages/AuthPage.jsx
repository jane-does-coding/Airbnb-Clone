import React, { useState } from "react";
import LoginForm from "../components/AuthPage/LoginForm";
import SignupForm from "../components/AuthPage/SignupForm";

const AuthPage = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="width-full flex h-screen">
      <div className="h-screen">
        <img src="/authbanner.jpg" className="w-full h-screen" alt="" />
      </div>
      <div className="p-6 w-full  flex items-center justify-center">
        <div className="w-fit flex flex-col">
          {login ? <LoginForm /> : <SignupForm />}
          {login ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="text-cyan-600">{login ? "Signup" : "Login"}</span>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
