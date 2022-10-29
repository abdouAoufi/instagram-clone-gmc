import Navbar from "../../components/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen  flex items-center justify-center">
        <p className="text-3xl text-red-400 font-bold">Error Page </p>
      </div>
    </>
  );
};

export default ErrorPage;
