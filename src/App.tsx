import { Route, Routes } from 'react-router-dom'

import { publicRoutes } from './routes/public-routes'

import 'antd/dist/antd.css';
import './app.scss'

function App() {
  return (
    <div className="app">
      <Routes>
        {publicRoutes.map((route, index) => <Route path={route.path} key={index + Date.now()} element={<route.element />} />)}
     </Routes>
    </div>
  );
}

export default App;
