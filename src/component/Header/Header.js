import React, { useState } from 'react';
import LogoAdmin from '../../assets/LogoAdmin.png';

const Header = () => {
  const [isPressedBenefits, setIsPressedBenefits] = useState(true);
  const [isPressedUsers, setIsPressedUsers] = useState(false);
  const [isBenefits, setIsBenefits] = useState(true);
  const [isUsers, setIsUsers] = useState(false);

  const onPressActiveBenefits = () => {
    if (!isPressedBenefits) {
      setIsPressedBenefits(true);
      setIsPressedUsers(false);
      setIsBenefits(true);
      setIsUsers(false);
    }
  };

  const onPressActiveUsers = () => {
    if (!isPressedUsers) {
      setIsPressedBenefits(false);
      setIsPressedUsers(true);
      setIsBenefits(false);
      setIsUsers(true);
    }
  };

  return (
    <div>
      <img src={LogoAdmin} alt="Header Admin Panel" className="mt-2 w-25" />
      <div className="text-center my-5">
        <button
          className={
            isPressedBenefits && isBenefits
              ? 'btn btn-outline-primary btn-lg mx-3 w-25 active'
              : 'btn btn-outline-primary btn-lg mx-3 w-25'
          }
          onClick={onPressActiveBenefits}
        >
          Benefits
        </button>
        <button
          className={
            isPressedUsers && isUsers
              ? 'btn btn-outline-success btn-lg mx-3 w-25 active'
              : 'btn btn-outline-success btn-lg mx-3 w-25'
          }
          onClick={onPressActiveUsers}
        >
          Users
        </button>
      </div>
    </div>
  );
};

export default Header;
