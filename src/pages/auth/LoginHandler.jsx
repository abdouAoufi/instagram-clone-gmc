const LoginHandler = (props) => {
  const { toggleAuth } = props;
  return (
    <div className="p-8 mt-4 bg-white border">
      <p className="text-center">
        Have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={toggleAuth}>
          {props.isSignUps ? "Log in" : "Sign up"}
        </span>
      </p>
    </div>
  );
};

export default LoginHandler;
