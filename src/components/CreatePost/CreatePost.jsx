
const CreatePost = (props) => {
  const { togglePost } = props;
  return (
    <div>
      <div className="absolute bottom-12 right-12">
        <button
          onClick={togglePost}
          className="font-bold text-lg bg-red-400 p-4 text-white rounded-md"
        >
          Create post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
