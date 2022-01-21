import { Link, Outlet } from 'react-router-dom';
import AuthStatus from '../AuthStatus';

import './styles.css';

function Layout() {
  return (
    <div className="container">
      <header className="header">
        <navbar className="navbar">
          <ul>
            <li>
              <Link to="/" className="navbar-link">
                Pets
              </Link>
            </li>
            <li>
              <Link to="/create" className="navbar-link">
                Create Pet
              </Link>
            </li>
          </ul>
        </navbar>
        <AuthStatus />
      </header>

      <Outlet />
    </div>
  );
}

export default Layout;
