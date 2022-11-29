import React from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import app from '../../firebase';

const BenefitDataBase = () => {
  const db = getFirestore(app);

  const createDataCollection = async (e) => {
    e.preventDefault();
    const infoBenefit = {
      name: 'La Argentina',
      type: '10% descuento',
      shortDescription: 'Descuento aniversario',
      longDescription:
        'Cumplimos 100 años y decidimos ferjarlo creando un Centro de Experiancias Virtual donde puedas conocer lo que hacemos, de una forma divertida. Juga en familia y aprendé más sobre nuestra compañía.',
      days: 'Lunes a Viernes',
      image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/050/300/themes/common/ogimage-1363177326-1646402915-a1ab5d4fc53341bf3895a4429d645cc31646402915.png?0',
    };
    try {
      const data = await addDoc(collection(db, 'benefits'), infoBenefit);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={createDataCollection}>
      <button type='submit'>Create data collection</button>
    </form>
  );
};

export default BenefitDataBase;
