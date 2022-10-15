import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Separator = () => {
  return (
    <div className="flex mt-4 items-center">
      <div className="w-24 h-px bg-gray-200 rounded"></div>
      <h3 className="mx-6  font-bold text-gray-400 text-sm">OR</h3>
      <div className="w-24 h-px bg-gray-200 rounded"></div>
    </div>
  );
};

const Info = () => {
  return (
    <>
      <p className="text-gray-400 w-80 text-center text-sm mt-4">
        People who use our service may have uploaded your contact information to
        Instagram. <span className="font-bold">Learn More</span>
      </p>
      <p className="text-gray-400 w-80 text-center text-sm mt-4">
        By signing up, you agree to our{" "}
        <span className="font-bold">Terms , Privacy Policy </span> and
        <span className="font-bold"> Cookies Policy .</span>
      </p>
    </>
  );
};

const Header = () => {
  return (
    <>
      <img
        className="w-40 h-12"
        src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
      />
      <h3 className="text-lg font-bold text-gray-400 text-center pt-4">
        Sign up to see photos and videos <br /> from your friends.
      </h3>
    </>
  );
};

const FormContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white border p-12">
      <Header />
      <Button text="Log in with facebook" />
      <Separator />
      <div className="flex flex-col">
        <Input placeHolder="Mobile Number or Email" type="email" />
        <Input placeHolder="Full Name" type="text" />
        <Input placeHolder="Username" type="text" />
        <Input placeHolder="Password" type="password" />
      </div>
      <Info />
      <Button text="Sign up" />
    </div>
  );
};

export default FormContainer;
