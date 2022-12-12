import React, { useState } from 'react';
import { Header } from '../../components/Header';
import BenefitsAdminPanel from '../BenefitsAdminPanel/BenefitsAdminPanel';
import UsersAdminPanel from '../UsersAdminPanel/UsersAdminPanel';

const AdminPanel = () => {
  const [isPressedBenefits, setIsPressedBenefits] = useState(true);
  const [isPressedUsers, setIsPressedUsers] = useState(false);
  const [isBenefits, setIsBenefits] = useState(true);
  const [isUsers, setIsUsers] = useState(false);

  return (
    <>
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
      {isPressedBenefits && isBenefits ? (
        <BenefitsAdminPanel />
      ) : (
        <UsersAdminPanel />
      )}
    </>
  );
};

export default AdminPanel;
