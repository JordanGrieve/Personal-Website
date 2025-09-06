import './App.css'
import SideBar from "./components/mainContent/MainContentData/assets/SideBar.jsx";
import MainContent from "./components/mainContent/MainContent.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <SideBar />
      <div className="ml-86">
        <MainContent />
      </div>
    </div>
  );
}


export default App;
