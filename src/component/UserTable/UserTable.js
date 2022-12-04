import React from 'react';

const UserTable = ({ user }) => {
  return (
    <tr>
      <td>
        <b>{user.displayName}</b>
      </td>
      <td>{user.email}</td>
      <td>{user.isStaff === 'false' ? 'User' : 'Staff'}</td>
      <td>
        <img src={user.photoURL} className="w-25" alt="user-img" />
      </td>
      <td>
        <button className="btn btn-primary" disabled>
          Edit
        </button>
      </td>
      <td>
        <button className="btn btn-danger" disabled>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserTable;
