import React from "react";
import closeIcon from "../../assets/images/close.png";
import Button from "../Button/Button";

function PostModal(props) {
  const { togglePost } = props;
  return (
    <div className="absolute  inset-0 bg-gray-800 flex items-center justify-center">
      <div className="p-12 rounded flex flex-col justify-center items-center gap-4 bg-white">
        <img
          onClick={togglePost}
          className="h-8 w-8 ml-64 cursor-pointer mb-12"
          src={closeIcon}
        />
        <p className="font-bold text-center text-2xl text-gray-400">
          Create a post
        </p>
        <input
          type="text"
          placeholder="Write anything you want "
          className="w-80 p-4 rounded border border-gray-500 outline-0"
        />
        <button className="text-white font-semibold text-lg">
          Upload a picture
        </button>

        <Button text="Upload" />
      </div>
    </div>
  );
}

export default PostModal;
