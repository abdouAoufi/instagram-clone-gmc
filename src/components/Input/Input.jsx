const Input = (props) => {
  return (
    <input
      className="border border-gray-400 my-2 w-64 px-2 py-1 rounded"
      placeholder={props.placeHolder || ""}
      type={props.type || "text"}
    />
  );
};

export default Input;
