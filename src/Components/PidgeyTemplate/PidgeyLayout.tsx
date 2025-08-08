import React from 'react';
import { Link, Outlet, useLocation } from 'react-router';

const PidgeyLayout: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <main className="flex flex-col px-5 ">
        <h1 className="px-4 text-2xl md:text-3xl lg:text-5xl py-2">
          Dados dos Pombos-Correio
        </h1>
        <div className="tabs ">
          <Link
            to="/pombos"
            className={`tab ${pathname === '/pombos' ? 'active' : ''}`}
          >
            Todos os Pombos
          </Link>
          <Link
            to="/pombos/criar"
            className={`tab ${pathname === '/pombos/criar' ? 'active' : ''}`}
          >
            Novo Pombo
          </Link>
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default PidgeyLayout;
