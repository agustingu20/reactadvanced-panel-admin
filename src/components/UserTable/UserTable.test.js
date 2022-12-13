import { fireEvent, render, screen } from '@testing-library/react';
import UserTable from './UserTable';

const user = {
  displayName: 'Pancho',
  email: 'pancho@hotmail.com',
  isStaff: 'true',
  photoURL: 'https://media.revistagq.com/photos/5ca5f2b9f464889534f49388/4:3/w_1972,h_1479,c_limit/hot_dog_perrito_bajo_cero_7406.png',
  id: 'panchoconpapitas',
};

describe('Testeamos si funcionan los botones', () => {
  test('Verificamos click en botones', () => {
    render(
            <UserTable user={user}/>,
    );
    const deleteButtonTest = screen.queryByTestId('deleteUserButton');
    fireEvent.click(deleteButtonTest);
    const editButtonTest = screen.queryByTestId('editUserButton');
    fireEvent.click(editButtonTest);
  });
});
