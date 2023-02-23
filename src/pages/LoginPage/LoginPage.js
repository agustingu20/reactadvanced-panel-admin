import React from 'react';
import styled from 'styled-components';
import BgLogIn from '../../assets/BgLogIn.png';
import AdminLogin from '../../components/AdminLogin/AdminLogin';

import './loginPage.css';

const StyledBody = styled.div`
  background: url(${BgLogIn});
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const LoginPage = ({ setIsLogin }) => {
  return (
    <StyledBody>
      <div className='login-wrapper'>
          <AdminLogin setIsLogin={setIsLogin}/>
      </div>
    </StyledBody>
  );
};

export default LoginPage;
