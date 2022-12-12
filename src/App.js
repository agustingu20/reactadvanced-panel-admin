import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import BenefitsAdminPanel from './pages/BenefitsAdminPanel/BenefitsAdminPanel';
import UsersAdminPanel from './pages/UsersAdminPanel/UsersAdminPanel';

function App() {
  const [isPressedBenefits, setIsPressedBenefits] = useState(true);
  const [isPressedUsers, setIsPressedUsers] = useState(false);
  const [isBenefits, setIsBenefits] = useState(true);
  const [isUsers, setIsUsers] = useState(false);

  return (
    <div className='App'>
      <Header
        isPressedBenefits={isPressedBenefits}
        setIsPressedBenefits={setIsPressedBenefits}
        isPressedUsers={isPressedUsers}
        setIsPressedUsers={setIsPressedUsers}
        isBenefits={isBenefits}
        setIsBenefits={setIsBenefits}
        isUsers={isUsers}
        setIsUsers={setIsUsers}
      />
      {isPressedBenefits && isBenefits ? <BenefitsAdminPanel /> : <UsersAdminPanel />}
      <Footer />
    </div>
  );
}

export default App;
