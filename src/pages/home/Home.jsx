import Navbar from "../../components/Navbar/Navbar";
import StoryContainer from "./StoryContainer";

const Home = () => {
  return (
    <dvi>
      <Navbar />
      <div className="flex px-24">
        <div>
          <StoryContainer />
        </div>
        <div>
          // info
        </div>
      </div>
    </dvi>
  );
};

export default Home;
