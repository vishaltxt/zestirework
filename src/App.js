import './App.css';
import Resource from './components/resource';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import View from './components/view';
import ResourceModal from './components/resourcemodal';
import Performance from './components/performance';
import Employee from './components/employee';
import Performmore from './components/performmore';
import Invoice from './components/invoice';
import Saleinvoice from './components/saleinvoice';

function App() {
  return (
    // <Resource />
    <Router>
      <Routes>
        <Route path="/" element={<Resource />} />
        {/* <Route path="/view" element={<View />} /> */}
        <Route path="/resourcemodel" element={<ResourceModal />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="employee" element={<Employee />} />
        <Route path="performmore" element={<Performmore />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="saleinvoice" element={<Saleinvoice />} />
      </Routes>
    </Router >
  );
}
export default App;
