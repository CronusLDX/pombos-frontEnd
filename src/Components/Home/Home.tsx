import React from 'react';
import { Link } from 'react-router';

const Home: React.FC = () => {
  return (
    <>
      <main className="flex flex-col px-5 ">
        <h1 className="px-3">Painel de Dados</h1>
        <div className="row">
          <div className="dashboard-card">
            Total de Cartas no sistema
            <span>22</span>
          </div>
          <div className="dashboard-card">
            Total de Cartas entregues
            <span>10</span>
          </div>
          <div className="dashboard-card">
            Clientes Cadastrados
            <span>10</span>
          </div>
          <div className="dashboard-card">
            Pombos Cadastrados
            <span>10</span>
          </div>
        </div>
        <div className="row">
          <div className="recent">
            <table>
              <thead>
                <tr>
                  <th>Cartas entregues recentemente</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Carta à Sir Winston</td>
                  <td>
                    <Link to="/" className="button is-small">
                      Ver
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="low">
            <table>
              <thead>
                <tr>
                  <th>Pombos Aposentados</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Josefino</td>
                  <td>
                    <Link to="/" className="button is-small">
                      Ver
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
