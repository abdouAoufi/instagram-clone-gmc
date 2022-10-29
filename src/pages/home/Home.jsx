import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import StoryContainer from "./StoryContainer";

const Home = () => {
  return (
    <dvi>
      <Navbar />
      <div className="flex px-24">
        <div>
          <StoryContainer />
          <Post />
          <Post />
        </div>
        <div>// info</div>
      </div>
    </dvi>
  );
};

export default Home;
