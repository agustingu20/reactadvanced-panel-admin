/* istanbul ignore file */
import React, { useState, useEffect } from 'react';
import { FloatingLabel, Form, Modal } from 'react-bootstrap';
import {
  getFirestore, doc, updateDoc, getDoc,
} from 'firebase/firestore';
import Swal from 'sweetalert2';
import app from '../../firebase';

const ModalEditUser = ({
  getUsers,
  showEditUser,
  setShowEditUser,
  userSelectedId,
  setIsEditing,
  isEditing,
}) => {
  const handleClose = () => setShowEditUser(false);

  const [values, setValues] = useState({
    displayName: '',
    email: '',
    isStaff: '',
    photoURL: '',
  });
  const db = getFirestore(app);
  const gettingUser = async () => {
    try {
      const users = doc(db, 'users', userSelectedId).withConverter();
      const user = await getDoc(users);
      const userValues = user.data();
      setValues(userValues);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      setIsEditing(true);
      const selected = doc(db, 'users', userSelectedId);
      await updateDoc(selected, values);
      getUsers();
      handleClose();
      setIsEditing(false);
      Swal.fire(
        'Edición usuario',
        'Usuario editado correctamente!',
        'success',
      );
    } catch (error) {
      Swal.fire(
        'Error al editar usuario!',
        `${error}`,
        'error',
      );
    }
  };

  useEffect(() => {
    if (isEditing) {
      gettingUser();
    }
  }, [userSelectedId]);

  return (
    <>
      <Modal show={showEditUser} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEdit}>
            <FloatingLabel
              controlId='floatingInput'
              label='Nombre'
              className='mb-3'
            >
              <Form.Control
                maxLength={30}
                required
                name='displayName'
                onChange={handleChange}
                value={values.displayName}
                type='text'
                placeholder='Nombre'
              />
            </FloatingLabel>

            <FloatingLabel
              controlId='floatingInput'
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
                placeholder='Email'
              />
            </FloatingLabel>

            <FloatingLabel
              controlId='floatingInput'
              label='Tipo Usuario'
              className='mb-3'
            >
              <Form.Select
                required
                name='isStaff'
                value={values.isStaff}
                onChange={handleChange}
              >
                <option value={'true'}>Staff</option>
                <option value={'false'}>User</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel
              controlId='floatingInput'
              label='Foto Perfil'
              className='mb-3'
            >
              <Form.Control
                maxLength={150}
                required
                name='photoURL'
                onChange={handleChange}
                value={values.photoURL}
                type='text'
                rows={3}
                as='textarea'
                placeholder='Foto Perfil'
              />
            </FloatingLabel>

            <button className='btn btn-primary my-3' type='submit'>
              {!isEditing ? 'editando...' : 'Guardar'}
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditUser;
