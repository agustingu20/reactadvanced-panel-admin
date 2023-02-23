import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import Swal from 'sweetalert2';
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
  const deleteUser = (userId) => {
    /* istanbul ignore next */
    Swal.fire({
      title: 'Está seguro que quiere eliminar?',
      text: 'No podrá revertir esta acción!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El usuario fue eliminado correctamente.',
          'success',
        );
        const userSelected = doc(db, 'users', userId);
        await deleteDoc(userSelected);
        getUsers();
      } else {
        Swal.fire('El usuario no fue eliminado.');
      }
    });
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
        <td className="dd-flex justify-content-center pt-4 pb-4">
          <button
            className="btn btn-primary mx-2"
            data-testId="editUserButton"
            onClick={() => editUser(user.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            data-testId="deleteUserButton"
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
