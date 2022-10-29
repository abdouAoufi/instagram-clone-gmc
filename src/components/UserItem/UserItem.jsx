import { useNavigate } from "react-router-dom";

const DEFAULT_IMG_URL =
  "https://st4.depositphotos.com/3864435/27060/i/600/depositphotos_270605520-stock-photo-default-avatar-profile-icon-grey.jpg";
const DEFAULT_USER_NAME = "user name";

const UserItem = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    props.isMyAccount && navigate("/auth");
  };
  return (
    <div className="flex gap-4 items-center my-6">
      <img
        className="h-12 w-12 rounded-full"
        src={props.imgUrl || DEFAULT_IMG_URL}
      />
      <div>
        <p className="font-bold capitalize">
          {props.userName || DEFAULT_USER_NAME}
        </p>
        <p className="font-thin text-sm text-gray-400">
          {props.isMyAccount ? "" : "Suggested for you"}
        </p>
      </div>
      <p
        onClick={handleClick}
        className="mx-12 font-bold text-blue-600 cursor-pointer"
      >
        {props.isMyAccount ? "logout" : "follow"}
      </p>
    </div>
  );
};

export default UserItem;
