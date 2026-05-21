import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col min-w-0">
        <Header />
        <main className="flex-1 h-full px-5 py-5 overflow-y-auto min-w-0 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
