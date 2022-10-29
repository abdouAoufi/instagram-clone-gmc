import { useState } from "react";
import FormContainer from "./FormContainer";
import Image from "./Image";
import LoginHandler from "./LoginHandler";

const Auth = () => {
  const [isSignUps , setIsSignUp] = useState(true);
  const toggleAuth = () => {
    setIsSignUp(!isSignUps)
  }
  return (
    <div className="flex justify-center items-center h-screen gap-12 bg-gray-50">
      <Image />
      <div>
        <FormContainer isSignUp={isSignUps} />
        <LoginHandler toggleAuth={toggleAuth} isSignUps={isSignUps} />
      </div>
    </div>
  );
};

export default Auth;
