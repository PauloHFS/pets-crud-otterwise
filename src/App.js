import { Routes, Route } from 'react-router-dom';

import Pets from './routes/Pets/Pets';
import Login from './routes/Login';
import CreatePetForm from './routes/CreatePetForm/CreatePetForm';

import Layout from './components/Layout/Layout';

import { AuthProvider, RequireAuth } from './context/auth-context';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Pets />} />
          <Route
            path="/create"
            element={
              <RequireAuth>
                <CreatePetForm />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
