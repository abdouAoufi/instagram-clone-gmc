import FormContainer from "./FormContainer";
import Image from "./Image";
import LoginHandler from "./LoginHandler";

const Auth = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-12 bg-gray-50">
      <Image />
      <div>
        <FormContainer />
        <LoginHandler />
      </div>
    </div>
  );
};

export default Auth;
