import React from 'react';
import BenefitsTable from '../../components/BenefitsTable/BenefitsTable';

const AdminPanel = () => {
  return (
    <div className="container mt-3">
      <div className="text-center mt-3">
        <h2><b>Admin Panel</b></h2>
      </div>
      <div className="text-center my-5">
        <button className="btn btn-secondary btn-lg mx-3 w-25">Benefits</button>
        <button className="btn btn-outline-secondary btn-lg mx-3 w-25" disabled>Users</button>
      </div>
      <BenefitsTable/>
    </div>
  );
};

export default AdminPanel;
