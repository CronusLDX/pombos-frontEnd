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
              className="lg:h-16 md:hidden hidden justify-center lg:flex w-14"
            />
            <span className="lg:text-5xl md:text-md text-sm font-light">
              Pombos Delivery
            </span>
          </div>
        </Link>
        <nav>
          <Link to="/" className="md:text-md text-[12px] lg:text-lg">
            Home
          </Link>
          <Link to="/pombos" className="md:text-md text-[12px] lg:text-lg">
            Pombos
          </Link>
          <Link to="/cartas" className="md:text-md text-[12px] lg:text-lg">
            Cartas
          </Link>
          <Link to="/clientes" className="md:text-md text-[12px] lg:text-lg">
            Clientes
          </Link>
        </nav>
      </header>
      <section>
        <Outlet />
      </section>
      <footer></footer>
    </>
  );
};

export default Root;
