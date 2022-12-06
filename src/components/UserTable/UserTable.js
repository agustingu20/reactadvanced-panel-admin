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

  const editUser = (id) => {
    setIsEditing(true);
    handleShow();
    setUserSelectedId(id);
  };

  const deleteUser = async (userId) => {
    try {
      if (window.confirm('¿Eliminar Usuario?')) {
        const userSelected = doc(db, 'users', userId);
        await deleteDoc(userSelected);
        getUsers();
      }
    } catch (error) {
      console.log(error);
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
          <img src={user.photoURL} className="w-25" alt="user-img" />
        </td>
        <td className="d-flex justify-content-center">
          <button
            className="btn btn-primary mx-2 mt-4 mb-4"
            onClick={() => editUser(user.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger mx-2 mt-4 mb-4"
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
