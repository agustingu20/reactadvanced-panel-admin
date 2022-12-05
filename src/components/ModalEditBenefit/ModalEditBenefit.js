/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { FloatingLabel, Form, Modal } from 'react-bootstrap'
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore'
import app from '../../firebase'
import { useEffect } from 'react';

const ModalEditBenefit = ({ showEdit, setShowEdit, benefitSelected, editting, getBenefits }) => {
  const handleClose = () => setShowEdit(false);
  const [edditing, setEdditing] = useState(false)
  
  const [values, setValues] = useState({
    name: '',
    title: '',
    days: '',
    url: '',
    shortDescription: '',
    longDescription: '',
    isStaff: ''
    })
  const db = getFirestore(app)
  const getBenefit = async () => {
    try {
     
      const benefitS = doc(db, 'benefits', benefitSelected).withConverter()
      const benefit = await getDoc(benefitS)
      const benefitValues = benefit.data()
      setValues(benefitValues)
     
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  const handleEdit = async (e) => {
   e.preventDefault()
    try {
      setEdditing(true)
      const selected = doc(db, 'benefits', benefitSelected)
      await updateDoc(selected, values)
      getBenefits()
      handleClose()
      setEdditing(false)
    } catch (error) {
      alert(`error firebase: ${error.message}`)
    }
    
  }
 
  useEffect(() => {
    if(editting){
      getBenefit()
    }
  }, [benefitSelected])
    
  return (
    <>
      <Modal show={showEdit} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Editar Beneficio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEdit}>
          <FloatingLabel controlId="floatingInput" label="Nombre" className="mb-3">
            <Form.Control maxLength={30} required name='name' onChange={handleChange} value={values.name} type="text" placeholder="Nombre" />
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingInput" label="Titulo" className="mb-3">
            <Form.Control maxLength={30} required name='title'  onChange={handleChange} value={values.title} type="text"  placeholder="Titulo" />
          </FloatingLabel>
         
          <FloatingLabel controlId="floatingInput" label="Descripcion corta" className="mb-3">
            <Form.Control maxLength={50} required name='shortDescription' onChange={handleChange} value={values.shortDescription} type="text" placeholder="Descripcion corta" />
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingInput" label="Descripcion Larga" className="mb-3">
            <Form.Control maxLength={150}  required name='longDescription'  onChange={handleChange} value={values.longDescription} type="text" rows={3} as="textarea" placeholder="Descripcion Larga" />
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingInput" label="Dias del beneficio" className="mb-3">
            <Form.Control maxLength={15}  required name='days' type="text" value={values.days} onChange={handleChange} placeholder="Dias del beneficio" />
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingInput" label="URL imagen" className="mb-3">
            <Form.Control required name='url' type="text" value={values.url} onChange={handleChange} placeholder="URL imagen" />
          </FloatingLabel>
         
          <Form.Select required name='isStaff' value={values.isStaff} onChange={handleChange}>
            <option>IsStaf</option>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </Form.Select>
          
            <button className='btn btn-primary my-3' type='submit'>{edditing? 'editando...' : 'Editar'}</button>
        </form>
        
        </Modal.Body>
          <button className='btn btn-success' onClick={handleClose}>Cerrar</button>
        </Modal>
    </>
  )
}

export default ModalEditBenefit