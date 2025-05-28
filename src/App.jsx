import { Header } from "./components/Header/header";
import { Sidebar } from "./components/Sidebar/sidebar";
import { DashboardMainContent } from "./components/DashboardMainContent/DashboardMainContent";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-container">
          <Header />
          <div className="app-sub-container">
            <Sidebar />
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
