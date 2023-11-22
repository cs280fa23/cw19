import Header from "./header";
import Posts from "./posts";

const Feed = () => {
  return (
    <div className="flex flex-col w-full min-h-screen border-x-2 border-slate-400 md:max-w-xl">
      <Header />
      <Posts />
    </div>
  );
};

export default Feed;
