import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="flex justify-center min-h-screen">
      <Sidebar />
      <Feed />
      <Toaster />
    </div>
  );
}

export default App;
