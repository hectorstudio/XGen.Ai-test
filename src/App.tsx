import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  } from 'react-router-dom';

import Layout from './layout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import './App.css';

function App() {
  return (
    <Router basename={''}>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
