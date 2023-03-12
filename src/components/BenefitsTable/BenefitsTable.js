import React, { useState, useEffect } from 'react';
import { Table, Spinner } from 'react-bootstrap';
import {
  getDocs, collection, deleteDoc, doc,
} from 'firebase/firestore';
import Swal from 'sweetalert2';
import { db } from '../../firebase';
import './BenefitsTable.css';
import ModalAddBenefits from '../ModalAddBenefit/ModalAddBenefits';
import ModalEditBenefit from '../ModalEditBenefit/ModalEditBenefit';

const BenefitsTable = () => {
  const [benefitsData, setBenefitsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [benefitSelected, setBenefitSelcted] = useState(null);
  const [editting, setEdittng] = useState(false);

  const handleShow = () => setShowAdd(true);
  const handleShowEdit = () => setShowEdit(true);
  /* istanbul ignore next */
  const getBenefits = async () => {
    const { docs } = await getDocs(collection(db, 'benefits'));
    const benefitMap = docs.map((benefit) => {
      return { ...benefit.data(), id: benefit.id };
    });
    setBenefitsData(benefitMap);
    setIsLoading(false);
  };
  /* istanbul ignore next */

  const deleteBenefit = (benefitId) => {
    Swal.fire({
      title: 'Quieres borrar este beneficio?',
      text: 'No se puede volver atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar beneficio',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Beneficio eliminado!',
          'El beneficio fue eliminado.',
          'success',
        );
        const benefitSelectedById = doc(db, 'benefits', benefitId);
        await deleteDoc(benefitSelectedById);
        getBenefits();
      } else {
        Swal.fire('El beneficio no fue eliminado.');
      }
    });
  };
  /* istanbul ignore next */
  const editB = (id) => {
    setEdittng(true);
    handleShowEdit();
    setBenefitSelcted(id);
  };

  useEffect(() => {
    getBenefits();
  }, []);

  return (
    <>
      <button className="btn btn-success my-3" onClick={handleShow}>
        Añadir Beneficio
      </button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Benefit</th>
            <th>Type</th>
            <th>Days</th>
            <th>Short Description</th>
            <th>Long Description</th>
            <th>Image</th>
            <th>IsStaff</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {benefitsData.map((benefit) => {
            return (
              <tr key={benefit.id}>
                <td>
                  <b>{benefit.name}</b>
                </td>
                <td>{benefit.title}</td>
                <td>{benefit.days}</td>
                <td>{benefit.shortDescription}</td>
                <td>
                  <p className="truncateCSS">{benefit.longDescription}</p>
                </td>
                <td>
                  <img src={benefit.url} className="w-25" alt="benefit-img" />
                </td>
                <td>{benefit.isStaff}</td>
                <td className="d-flex justify-content-center pt-4 pb-4">
                  <button
                    className="btn btn-primary mx-2"
                    data-testId="editBenefitButtonTest"
                    onClick={() => editB(benefit.id)}
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-danger'
                    data-testId='deleteBenefitButtonTest'
                    onClick={() => deleteBenefit(benefit.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" className="mb-5 mt-5" />
        </div>
      )}
      <ModalAddBenefits
        showAdd={showAdd}
        setShowAdd={setShowAdd}
        getBenefits={getBenefits}
      />
      <ModalEditBenefit
        getBenefits={getBenefits}
        editting={editting}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        benefitSelected={benefitSelected}
      />
    </>
  );
};

export default BenefitsTable;
