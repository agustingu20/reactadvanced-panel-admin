import './App.css';
import BenefitDataBase from './component/BenefitDataBase/BenefitDataBase';
import AdminPanel from './pages/AdminPanel/AdminPanel';

function App() {
  return (
    <div className="App">
      <AdminPanel />
      <BenefitDataBase />
    </div>
  );
}

export default App;
