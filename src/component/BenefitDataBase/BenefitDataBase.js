import React, { useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import app from '../../firebase';

const BenefitDataBase = () => {
  const db = getFirestore(app);

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [url, setUrl] = useState('');
  const [days, setDays] = useState('');
  const [isStaff, setIsStaff] = useState();

  const onSubmitBenefit = async (e) => {
    e.preventDefault();
    const infoBenefit = {
      name,
      title,
      shortDescription,
      longDescription,
      days,
      url,
      isStaff,
    };
    try {
      const data = await addDoc(collection(db, 'benefits'), infoBenefit);
      console.log(data);
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='d-flex justify-content-center mt-5'>
      <form
        onSubmit={onSubmitBenefit}
        className='d-flex justify-content-center flex-column w-50'
      >
        <input
          placeholder='Nombre del beneficio'
          className='mt-3'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder='Ingrese un titulo'
          className='mt-3'
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder='Ingrese la url de la imagen'
          className='mt-3'
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          placeholder='Ingrese una descripcion corta'
          className='mt-3'
          onChange={(e) => setShortDescription(e.target.value)}
        />
        <input
          placeholder='Ingrese una descripcion larga'
          className='mt-3'
          onChange={(e) => setLongDescription(e.target.value)}
        />
        <input
          placeholder='Ingrese los dias del beneficio'
          className='mt-3'
          onChange={(e) => setDays(e.target.value)}
        />
        <select className='form-control form-control-sm mt-4' onChange={(e) => setIsStaff(e.target.value)}>
          <option>Selecciona un valor</option>
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        <button type='submit' className='mt-3 mb-5'>
          Create data collection
        </button>
      </form>
    </div>
  );
};

export default BenefitDataBase;
