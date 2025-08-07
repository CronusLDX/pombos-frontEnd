import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Root: React.FC = () => {
  return (
    <>
      <header className=" mb-4 flex items-center justify-between">
        <Link to="/" className="logo">
          <div className="flex justify-around gap-3 text-center">
            <img
              src={logo}
              alt="Logo"
              className="h-16 justify-center flex w-14"
            />
            <span className="text-5xl font-light">Pombos Delivery</span>
          </div>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pombos">Pombos</Link>
          <Link to="/cartas">Cartas</Link>
          <Link to="/clientes">Clientes</Link>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>

      <footer>
        Todos Direitos Reservados &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Root;
