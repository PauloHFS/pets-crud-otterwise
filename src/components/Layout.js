import { Link, Outlet } from 'react-router-dom';
import AuthStatus from './AuthStatus';

function Layout() {
  return (
    <div>
      <AuthStatus />
      <ul>
        <li>
          <Link to="/">Pets</Link>
        </li>
        <li>
          <Link to="/create">Create Pet</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Layout;
