import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MailLayout: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <main className="flex flex-col px-5  ">
        <h1 className="px-4 text-2xl md:text-3xl lg:text-5xl py-2">
          Dados das Cartas
        </h1>
        <div className="tabs ">
          <Link
            to="/cartas"
            className={`tab ${pathname === '/cartas' ? 'active' : ''}`}
          >
            Todos as Cartas
          </Link>
          <Link
            to="/cartas/criar"
            className={`tab ${pathname === '/cartas/criar' ? 'active' : ''}`}
          >
            Nova Carta
          </Link>
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default MailLayout;
