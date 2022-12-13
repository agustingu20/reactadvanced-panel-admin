import { render, screen } from '@testing-library/react';
import UsersAdminPanel from './UsersAdminPanel';

describe('User admin panel test', () => {
  test('', () => {
    render(
              <UsersAdminPanel />,
    );
    const adminPanelTest = screen.getByText('Nombre');
    expect(adminPanelTest).toBeInTheDocument();
  });
});
