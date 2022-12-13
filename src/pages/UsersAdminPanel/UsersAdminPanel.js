import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Spinner } from 'react-bootstrap';
import { db } from '../../firebase';
import UserTable from '../../components/UserTable/UserTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const UsersAdminPanel = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEditUser, setShowEditUser] = useState(false);
  const [userSelectedId, setUserSelectedId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  /* istanbul ignore next */
  const getUsers = async () => {
    const { docs } = await getDocs(collection(db, 'users'));
    const usersMap = docs.map((user) => {
      return { ...user.data(), id: user.id };
    });
    setUsersData(usersMap);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className='container mt-3 table-responsive'>
        <table className='table table-hover table-bordered align-middle'>
          <thead className='text-center'>
            <tr>
              <th scope='col'>Nombre</th>
              <th scope='col'>Email</th>
              <th scope='col'>Tipo usuario</th>
              <th scope='col'>Foto de perfil</th>
              <th scope='col2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usersData?.map((user) => (
              <UserTable
                user={user}
                key={user.id}
                getUsers={getUsers}
                showEditUser={showEditUser}
                setShowEditUser={setShowEditUser}
                userSelectedId={userSelectedId}
                setUserSelectedId={setUserSelectedId}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />
            ))}
          </tbody>
        </table>
        {isLoading && (
          <div className='d-flex justify-content-center mx-auto'>
            <Spinner
              animation='border'
              variant='primary'
              className='mb-5 mt-5'
            />
          </div>
        )}
      </div>
    </>
  );
};

export default UsersAdminPanel;
