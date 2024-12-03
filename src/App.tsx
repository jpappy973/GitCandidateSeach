import {Outlet} from 'react-router-dom';
import NavBar from './components/Nav';
// import CandidateSearch from './pages/CandidateSearch';
// import SavedCandidates from './pages/SavedCandidates';

function App() {
  return (
    <>
      
      <main>
        <NavBar />
        <Outlet/>
        
      </main>
    </>
  );
}

export default App;
