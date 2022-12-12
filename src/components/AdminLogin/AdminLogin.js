import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AdminLogin = ({ setIsLogin }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const { handleSubmit } = useForm();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    if (
      values.email === 'admin@admin.com' && values.password === 'Admin@1234'
    ) {
      setIsLogin(true);
    }
  };

  return (
    <>
      <h4 className='mb-4'>Acceso Admin</h4>
      <form onSubmit={handleSubmit(submit)}>
        <FloatingLabel
          controlId='floatingInputEmail'
          label='Email'
          className='mb-3'
        >
          <Form.Control
            maxLength={30}
            required
            name='email'
            onChange={handleChange}
            value={values.email}
            type='email'
          />
        </FloatingLabel>

        <FloatingLabel
          controlId='floatingInputPass'
          label='Contraseña'
          className='mb-3'
        >
          <Form.Control
            minLength={8}
            maxLength={50}
            required
            name='password'
            onChange={handleChange}
            value={values.password}
            type='password'
          />
        </FloatingLabel>

        <button className='btn btn-primary my-3' type='submit'>
          Iniciar Sesión
        </button>
      </form>
    </>
  );
};

export default AdminLogin;
