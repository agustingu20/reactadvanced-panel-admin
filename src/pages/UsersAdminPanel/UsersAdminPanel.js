import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from '../../firebase';
import UserTable from '../../component/UserTable/UserTable';

const UsersAdminPanel = () => {
  const [usersData, setUsersData] = useState([]);

  const getUsers = async () => {
    const { docs } = await getDocs(collection(db, 'users'));

    const usersMap = docs.map((user) => {
      return {...user.data(), id: user.id};
    });
    setUsersData(usersMap);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
    <div className="container mt-3 table-responsive">
      <table className="table table-hover align-middle">
        <thead className="text-center">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Tipo usuario</th>
            <th scope="col">Foto de perfil</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {usersData?.map((user) => (
            <UserTable user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default UsersAdminPanel;
