/* istanbul ignore file */
import React from 'react';
import { Button } from 'react-bootstrap';
import LogoAdmin from '../../assets/LogoAdmin.png';
import './header.css';

const Header = ({
  isPressedBenefits,
  setIsPressedBenefits,
  isPressedUsers,
  setIsPressedUsers,
  isBenefits,
  setIsBenefits,
  isUsers,
  setIsUsers,
}) => {
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

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="container">
      <img src={LogoAdmin} alt="Header Admin Panel" className="mt-2 w-25" />
      <Button variant="danger" className="logOutButton" onClick={logOut}>
        <img
          src="https://icongr.am/fontawesome/power-off.svg?size=20&color=ffffff"
          alt="logOutButton"
        />
      </Button>
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
