import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db } from '../../firebase';
import ModalEditUser from '../ModalEditUser/ModalEditUser';

const UserTable = ({
  user,
  getUsers,
  setShowEditUser,
  showEditUser,
  userSelectedId,
  setUserSelectedId,
  setIsEditing,
  isEditing,
}) => {
  const handleShow = () => setShowEditUser(true);

  /* istanbul ignore next */
  const editUser = (id) => {
    setIsEditing(true);
    handleShow();
    setUserSelectedId(id);
  };
  const deleteUser = async (userId) => {
    try {
      /* istanbul ignore next */
      if (window.confirm('¿Eliminar Usuario?')) {
        const userSelected = doc(db, 'users', userId);
        await deleteDoc(userSelected);
        getUsers();
      }
    } catch (error) {
      /* istanbul ignore next */
      console.error(error);
    }
  };

  return (
    <>
      <tr>
        <td>
          <b>{user.displayName}</b>
        </td>
        <td>{user.email}</td>
        <td>{user.isStaff === 'false' ? 'User' : 'Staff'}</td>
        <td>
          <img src={user.photoURL} className='w-25' alt='user-img' />
        </td>
        <td className='dd-flex justify-content-center pt-4 pb-4'>
          <button
            className='btn btn-primary mx-2'
            data-testId= 'editUserButton'
            onClick={() => editUser(user.id)}
          >
            Edit
          </button>
          <button
            className='btn btn-danger'
            data-testId= 'deleteUserButton'
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
        </td>
      </tr>
      <ModalEditUser
        getUsers={getUsers}
        showEditUser={showEditUser}
        setShowEditUser={setShowEditUser}
        userSelectedId={userSelectedId}
        setIsEditing={setIsEditing}
        isEditing={isEditing}
      />
    </>
  );
};

export default UserTable;
