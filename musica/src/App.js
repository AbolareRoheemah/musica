import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={ <Dashboard /> } />
      </Routes>
    </div>
  );
}

export default App;
