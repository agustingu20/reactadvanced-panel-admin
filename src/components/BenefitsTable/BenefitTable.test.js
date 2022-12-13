import { fireEvent, render, screen } from '@testing-library/react';
import BenefitsTable from './BenefitsTable';

const benefit = {
  name: 'RC',
  title: '50% descuento en RC gym',
  id: 'idbeneficio',
  days: 'todos los dias',
  shortDescription: 'descripcion corta',
  longDescription: 'descripcion larga',
  image: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg',
  isStaff: 'false',
};

describe('Test Benefit table', () => {
  test('Verificamos que funcionen los botones', () => {
    render(
            <BenefitsTable benefit={benefit}/>,
    );
    const editBenefitButtonTest = screen.queryByTestId('editBenefitButtonTest');
    fireEvent.click(editBenefitButtonTest);
    const deleteBenefitButtonTest = screen.queryByTestId('deleteBenefitButtonTest');
    fireEvent.click(deleteBenefitButtonTest);
  });
});
