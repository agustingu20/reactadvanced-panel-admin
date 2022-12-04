import './App.css';
import BenefitDataBase from './component/BenefitDataBase/BenefitDataBase';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import AdminPanel from './pages/AdminPanel/AdminPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <AdminPanel />
      <BenefitDataBase />
      <Footer />
    </div>
  );
}

export default App;
