/* istanbul ignore file */
import React, { useState } from 'react';
import { FloatingLabel, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';
import app from '../../firebase';

const ModalAddBenefits = ({ showAdd, setShowAdd, getBenefits }) => {
  const [buttonLoad, setButtonLoad] = useState(false);
  const db = getFirestore(app);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleClose = () => setShowAdd(false);

  const submit = async (result) => {
    const benefit = result;
    try {
      setButtonLoad(true);
      await addDoc(collection(db, 'benefits'), benefit);
      getBenefits();
      handleClose();
      reset();
      Swal.fire(
        'Beneficio',
        'Beneficio añadido correctamente!',
        'success',
      );
    } catch (error) {
      Swal.fire(
        'Beneficio',
        'Error al guardar el beneficio!',
        'error',
      );
    }
    setButtonLoad(false);
  };

  return (
    <>
      <Modal show={showAdd} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar beneficio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(submit)}>
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className="mb-2"
            >
              <Form.Control
                {...register('name', { required: true })}
                type="text"
                minLength={3}
                maxLength={30}
                placeholder="Nombre"
              />
            </FloatingLabel>
            <div className="mb-3 mx-1">
              {errors?.name && (
                <span className="text-danger">Nombre requerido</span>
              )}
            </div>
            <FloatingLabel
              controlId="floatingInput"
              label="Titulo"
              className="mb-2"
            >
              <Form.Control
                {...register('title', { required: true })}
                type="text"
                minLength={3}
                maxLength={30}
                placeholder="Titulo"
              />
            </FloatingLabel>
            <div className="mb-3 mx-1">
              {errors?.title && (
                <span className="text-danger">Titulo requerido</span>
              )}
            </div>
            <FloatingLabel
              controlId="floatingInput"
              label="Descripcion corta"
              className="mb-2"
            >
              <Form.Control
                {...register('shortDescription', { required: true })}
                type="text"
                minLength={3}
                maxLength={50}
                placeholder="Descripcion corta"
                style={{ height: '80px' }}
              />
            </FloatingLabel>
            <div className="mb-3 mx-1">
              {errors?.shortDescription && (
                <span className="text-danger">Descripcion corta requerida</span>
              )}
            </div>
            <FloatingLabel
              controlId="floatingInput"
              label="Descripcion Larga"
              className="mb-2"
            >
              <Form.Control
                {...register('longDescription', { required: true })}
                type="text"
                as="textarea"
                placeholder="Descripcion Larga"
                minLength={3}
                maxLength={250}
                style={{ height: '130px' }}
              />
            </FloatingLabel>
            <div className="mb-3 mx-1">
              {errors?.longDescription && (
                <span className="text-danger">Descripcion larga requerida</span>
              )}
            </div>
            <FloatingLabel
              controlId="floatingInput"
              label="Dias del beneficio"
              className="mb-2"
            >
              <Form.Control
                {...register('days', { required: true })}
                type="text"
                minLength={3}
                maxLength={15}
                placeholder="Dias del beneficio"
              />
            </FloatingLabel>
            <div className="mb-3 mx-1">
              {errors?.days && (
                <span className="text-danger">Días requeridos</span>
              )}
            </div>
            <FloatingLabel
              controlId="floatingInput"
              label="URL imagen"
              className="mb-2"
            >
              <Form.Control
                {...register('url', { required: true })}
                type="text"
                minLength={3}
                maxLength={250}
                placeholder="URL imagen"
              />
            </FloatingLabel>
            <div className="mb-3 mx-1">
              {errors?.url && (
                <span className="text-danger">URL, campo requerido</span>
              )}
            </div>
            <div className="mt-2">
              <Form.Label className="mx-1">Es Staf?</Form.Label>
              <Form.Select {...register('isStaf', { required: true })}>
                <option value={true}>True</option>
                <option value={false}>False</option>
              </Form.Select>
              <div className="mb-3 mx-1">
                {errors?.isStaff && (
                  <span className="text-danger">Selecciona un valor</span>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary my-3 w-100" type="submit">
                {buttonLoad ? 'loading...' : 'Guardar'}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAddBenefits;
