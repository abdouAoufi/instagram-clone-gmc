import { useState } from "react";

const DEFAULT_IMG =
  "https://st4.depositphotos.com/3864435/27060/i/600/depositphotos_270605520-stock-photo-default-avatar-profile-icon-grey.jpg";

const DEFAULT_IMG_POST =
  "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80";

const ProfileInfo = (props) => {
  const { accountName = "no name", picProfile = DEFAULT_IMG } = props;
  return (
    <div className="flex items-center gap-2">
      <img className="h-12 w-12 rounded-full" src={picProfile} />
      <p className="text-md">{accountName}</p>
    </div>
  );
};

const ImageContainer = (props) => {
  const { postPicSrc = DEFAULT_IMG_POST } = props;

  return <img style={{ width: 500 }} src={postPicSrc} className="pt-4" />;
};
const DEFAULT_NUM_LIKES = 0;
const SocialInfo = (props) => {
  const { numOfLikes = DEFAULT_NUM_LIKES } = props;
  const [like, setLike] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(numOfLikes);

  const handleLikes = () => {
    setLike(!like);
    if (!like) {
      setCurrentLikes(currentLikes + 1);
    } else {
      setCurrentLikes(currentLikes - 1);
    }
  };

  return (
    <div>
      <div className="flex py-4">
        <div className="mx-2 cursor-pointer">
          <span onClick={handleLikes}>
            {!like ? (
              <svg
                aria-label="Like"
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            ) : (
              <svg
                aria-label="Je n’aime plus"
                fill="#ed4956"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            )}
          </span>
        </div>
        <div className="mx-2 cursor-pointer">
          <svg
            aria-label="Comment"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clipRule="evenodd"
              d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="mx-2 cursor-pointer">
          <svg
            aria-label="Share Post"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
          </svg>
        </div>
      </div>
      <p className="pl-4 font-bold">{currentLikes} likes</p>
    </div>
  );
};
const PostInfo = (props) => {
  return (
    <div>
      <p className="text-md font-bold mx-4 text-uppercase">
        {props.userName} <span className="font-normal">{props.postInfo}</span>
      </p>
    </div>
  );
};

const Post = () => {
  return (
    <div className="border my-4 p-4 rounded">
      <ProfileInfo
        accountName="test account 1"
        picProfile="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />
      <ImageContainer
        postPicSrc={
          "https://images.unsplash.com/photo-1666360128821-dd3019b19b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        }
      />
      <SocialInfo numOfLikes={20} />
      <PostInfo userName={"Somebody"} postInfo="This is my daily post" />
    </div>
  );
};

export default Post;
