import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import BenefitTable from '../../component/BenefitTable/BenefitTable';
import { db } from '../../firebase';

const AdminPanel = () => {
  const [benefitData, setBenefitData] = useState([]);

  const getBenefits = async () => {
    const { docs } = await getDocs(collection(db, 'benefits'));
    console.log('getBenefits ~ docs', docs);

    const benefitMap = docs.map((benefit) => {
      return {
        ...benefit.data(),
      };
    });
    setBenefitData(benefitMap);
  };

  useEffect(() => {
    getBenefits();
  }, []);

  return (
    <div className="container mt-3 ">
      <div className="text-center mt-3">
        <h2>
          <b>Admin Panel</b>
        </h2>
      </div>
      <div className="text-center my-5">
        <button className="btn btn-secondary btn-lg mx-3 w-25">Benefits</button>
        <button className="btn btn-outline-secondary btn-lg mx-3 w-25" disabled>
          Users
        </button>
      </div>
      <table className="table table-hover">
        <thead className="text-center">
          <tr>
            <th scope="col">Benefit</th>
            <th scope="col">Type</th>
            <th scope="col">Days</th>
            <th scope="col">Short Description</th>
            <th scope="col">Long Description</th>
            <th scope="col">Image</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {benefitData?.map((benefit) => (
            <BenefitTable benefit={benefit} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
