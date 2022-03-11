import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes/public-routes'

import './app.scss'


function App() {
  return (
    <div className="app">
      <Routes>
        {publicRoutes.map((route) => <Route path={route.path} element={<route.element />} />)}
     </Routes>
    </div>
  );
}

export default App;
