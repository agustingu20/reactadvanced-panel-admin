import React, { useState } from 'react';
import { FloatingLabel, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
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
      const data = await addDoc(collection(db, 'benefits'), benefit);
      console.log(data);
      getBenefits();
      handleClose();
      reset();
    } catch (error) {
      console.log(error);
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
              controlId='floatingInput'
              label='Nombre'
              className='mb-3'
            >
              <Form.Control
                {...register('name', { required: true })}
                type='text'
                placeholder='Nombre'
              />
            </FloatingLabel>
            {errors?.name && (
              <span className='text-danger'>Nombre requerido</span>
            )}
            <FloatingLabel
              controlId='floatingInput'
              label='Titulo'
              className='mb-3'
            >
              <Form.Control
                {...register('title', { required: true })}
                type='text'
                placeholder='Titulo'
              />
            </FloatingLabel>
            {errors?.title && (
              <span className='text-danger'>Titulo requerido</span>
            )}
            <FloatingLabel
              controlId='floatingInput'
              label='Descripcion corta'
              className='mb-3'
            >
              <Form.Control
                {...register('shortDescription', { required: true })}
                type='text'
                placeholder='Descripcion corta'
              />
            </FloatingLabel>
            {errors?.shortDescription && (
              <span className='text-danger'>descripcion requerida</span>
            )}
            <FloatingLabel
              controlId='floatingInput'
              label='Descripcion Larga'
              className='mb-3'
            >
              <Form.Control
                {...register('longDescription', { required: true })}
                type='text'
                rows={3}
                as='textarea'
                placeholder='Descripcion Larga'
              />
            </FloatingLabel>
            {errors?.longDescription && (
              <span className='text-danger'>descripcion requerida</span>
            )}
            <FloatingLabel
              controlId='floatingInput'
              label='Dias del beneficio'
              className='mb-3'
            >
              <Form.Control
                {...register('days', { required: true })}
                type='text'
                placeholder='Dias del beneficio'
              />
            </FloatingLabel>
            {errors?.days && (
              <span className='text-danger'>dias requeridos</span>
            )}
            <FloatingLabel
              controlId='floatingInput'
              label='URL imagen'
              className='mb-3'
            >
              <Form.Control
                {...register('url', { required: true })}
                type='text'
                placeholder='URL imagen'
              />
            </FloatingLabel>
            {errors?.url && (
              <span className='text-danger'>URL, campo requerido</span>
            )}
            <Form.Select {...register('isStaf', { required: true })}>
              <option>IsStaf</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Form.Select>
            {errors?.isStaff && (
              <span className='text-danger'>Selecciona un valor</span>
            )}
            <button className='btn btn-primary my-3' type='submit'>
              {buttonLoad ? 'loading...' : 'Añadir'}
            </button>
          </form>
        </Modal.Body>
        <button className='btn btn-success' onClick={handleClose}>
          Cerrar
        </button>
      </Modal>
    </>
  );
};

export default ModalAddBenefits;
