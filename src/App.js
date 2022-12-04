import './App.css';
import BenefitDataBase from './component/BenefitDataBase/BenefitDataBase';
import { Footer } from './component/Footer';
import AdminPanel from './pages/AdminPanel/AdminPanel';

function App() {
  return (
    <div className="App">
      <AdminPanel />
      <BenefitDataBase />
      <Footer />
    </div>
  );
}

export default App;
