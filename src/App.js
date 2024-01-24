import './App.css';
import Resource from './components/resource';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import View from './components/view';
import ResourceModal from './components/resourcemodal';
import Performance from './components/performance';

function App() {
  return (
    // <Resource />
    <Router>
      <Routes>
        <Route path="/" element={<Resource />} />
        {/* <Route path="/view" element={<View />} /> */}
        <Route path="/resourcemodel" element={<ResourceModal />} />
        <Route path="/performance" element={<Performance />} />
      </Routes>
    </Router >
  );
}

export default App;
