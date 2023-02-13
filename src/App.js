import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import CompletedProjects from './pages/CompletedProjects';
import CreateProjectPage from "./pages/CreateProjectPage";
import MyProjectsPage from "./pages/MyProjectsPage";
import EditProjectPage from "./pages/EditProjectPage";

function App() {
  return ( <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<CreateProjectPage />} />
        <Route path="/my-projects" element={<MyProjectsPage />} />
        <Route path="/completed-projects" element={<CompletedProjects />} />
        <Route path="/my-projects/:projid" element={<EditProjectPage />} />
      </Routes>
      </div>
  );
}

export default App;
