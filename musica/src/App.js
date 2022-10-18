import './App.css';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='app-ctn'>
      <Header />
      <div className="main-ctn">
        <div>
          <Sidebar />
        </div>
        <div className='app-body'>
          <Routes>
            <Route path='/' element={ <Dashboard /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
