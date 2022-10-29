import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import UserItem from "../../components/UserItem/UserItem";
import StoryContainer from "./StoryContainer";

const Home = () => {
  return (
    <dvi>
      <Navbar />
      <div className="flex px-24">
        <div>
          <StoryContainer />
          <Post />
        </div>
        <div>
          <div>
            <UserItem />
          </div>
        </div>
      </div>
    </dvi>
  );
};

export default Home;
