import { render, screen } from '@testing-library/react';
import UserTable from './UserTable';

const user = {
  displayName: 'Agustin Gomez Urrutia',
  photoURL:
    'https://lh3.googleusercontent.com/a/AEdFTp6bYn9Z8g-n1yQak7g2qfoO_NiESDmjWdDQK8mHSw=s96-c',
  email: 'agustin.gu20@gmail.com',
  isStaff: 'false',
};

describe('Test de los resultados de la tabla de usuarios', () => {
  test('Esperamos que rendericen los resultados', async () => {
    render(<UserTable user={user} />);
    const element = await screen.findByText(user.displayName);
    expect(element).toBeInTheDocument();
  });
});
