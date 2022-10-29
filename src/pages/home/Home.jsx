import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import UserItem from "../../components/UserItem/UserItem";
import { SUGGESTION_USERS } from "../../utils/fake-date";
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
        <div className="pl-48 pt-8">
          <div>
            <UserItem isMyAccount />
            <div className="font-bold text-gray-400 mt-6 mb-4">
              Suggested for you
            </div>
            <div>
              {SUGGESTION_USERS.map((user) => {
                return (
                  <UserItem userName={user.userName} imgUrl={user.imgUrl} />
                );
              })}
            </div>
            <div className="mt-8 mx-12">
              <Footer />
              <a className="text-xs mr-4 text-gray-600" href="/">
                English
              </a>
              <a className="text-xs text-gray-600 " href="/">
                &copy; 2021 Instagram from Facebook{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </dvi>
  );
};

export default Home;
