import './App.css'
import SideBar from "./components/mainContent/MainContentData/assets/SideBar.jsx";
import MainContent from "./components/mainContent/MainContent.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white flex">
      {/* Sidebar  */}
      <div className="hidden md:block">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-86">
        <MainContent />
      </div>
    </div>
  );
}



export default App;
