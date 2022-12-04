import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import BenefitTable from '../../component/BenefitTable/BenefitTable';
import { db } from '../../firebase';
import { Header } from '../../component/Header';

const AdminPanel = () => {
  const [benefitData, setBenefitData] = useState([]);

  const getBenefits = async () => {
    const { docs } = await getDocs(collection(db, 'benefits'));

    const benefitMap = docs.map((benefit) => {
      return {...benefit.data(), id: benefit.id};
    });
    setBenefitData(benefitMap);
  };

  useEffect(() => {
    getBenefits();
  }, []);

  return (
    <>
    <Header/>
    <div className="container mt-3 ">
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
            <th scope="col">IsStaff</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {benefitData?.map((benefit) => (
            <BenefitTable benefit={benefit} key={benefit.id} />
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminPanel;
