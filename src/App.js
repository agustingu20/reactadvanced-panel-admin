import { useEffect, useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const getToken = JSON.parse(localStorage.getItem('token')) || null;

  useEffect(() => {
    if (getToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <div className='App'>
      {!isLogin ? <LoginPage setIsLogin={setIsLogin} /> : <AdminPanel />}
      <Footer />
    </div>
  );
}

export default App;
