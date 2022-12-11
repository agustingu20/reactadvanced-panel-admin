import { render, screen } from '@testing-library/react';
import UserTable from '../../components/UserTable/UserTable';
import UsersAdminPanel from './UsersAdminPanel';

const usersData = [
  {
    displayName: 'Agustin Gomez Urrutia',
    photoURL:
      'https://lh3.googleusercontent.com/a/AEdFTp6bYn9Z8g-n1yQak7g2qfoO_NiESDmjWdDQK8mHSw=s96-c',
    email: 'agustin.gu20@gmail.com',
    isStaff: 'false',
  },
];

describe('Test panel administrador de usuarios', () => {
  test('Renderizado del header de la tabla de usuarios', () => {
    render(<UsersAdminPanel />);
    const element = screen.getByText('Nombre');
    expect(element).toBeInTheDocument();
  });
});
