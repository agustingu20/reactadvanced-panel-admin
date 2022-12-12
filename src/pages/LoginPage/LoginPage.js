import React from 'react';
import AdminLogin from '../../components/AdminLogin/AdminLogin';
import './loginPage.css';

const LoginPage = ({ setIsLogin }) => {
  return (
    <div className='login-wrapper'>
        <AdminLogin setIsLogin={setIsLogin}/>
    </div>
  );
};

export default LoginPage;
