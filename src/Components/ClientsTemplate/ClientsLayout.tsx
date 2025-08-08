import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const ClientsLayout: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <main className="flex flex-col px-3  ">
        <h1 className="px-4">Dados dos Clientes</h1>
        <div className="tabs ">
          <Link
            to="/clientes"
            className={`tab ${pathname === '/clientes' ? 'active' : ''}`}
          >
            Todos os Clientes
          </Link>
          <Link
            to="/clientes/criar"
            className={`tab ${pathname === '/clientes/criar' ? 'active' : ''}`}
          >
            Novo Cliente
          </Link>
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default ClientsLayout;
