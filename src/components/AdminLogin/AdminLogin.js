import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import LogoAdmin from '../../assets/LogoAdmin.png';
import { db } from '../../firebase';

import './AdminLogin.css';

const AdminLogin = ({ setIsLogin }) => {
  const [values, setValues] = useState({
    password: '',
  });
  const [adminData, setAdminData] = useState([]);

  const { handleSubmit } = useForm();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const getAdmin = async () => {
    const { docs } = await getDocs(collection(db, 'admin'));
    const adminMap = docs.map((admin) => {
      return { ...admin.data() };
    });
    setAdminData(adminMap);
  };

  useEffect(() => {
    getAdmin();
  }, []);

  const submit = () => {
    if (values.password === adminData[0].password) {
      setIsLogin(true);
      localStorage.setItem('token', JSON.stringify('loginAdmin'));
    } else {
      Swal.fire('Contraseña incorrecta');
    }
  };

  return (
    <div className="d-flex align-items-center">
      <div className="container">
        <div className="card w-50 mt-5 mx-auto">
          <img
            src={LogoAdmin}
            className="card-img-top w-75 mx-5 my-2"
            alt="..."
          />
          <div className="card-body">
            <form onSubmit={handleSubmit(submit)}>
              <FloatingLabel
                controlId="floatingInputPass"
                label="Código de acceso"
                className="my-2 mx-3"
              >
                <Form.Control
                  minLength={8}
                  maxLength={50}
                  required
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  type="password"
                />
              </FloatingLabel>

              <button
                className="btn btn-danger text-uppercase my-3 log-in-button"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
