import React from 'react';
import { Link } from 'react-router';
import { useMail } from '../../contexts/MailContext';
import { usePidgey } from '../../contexts/PidgeyContext';
import { useClient } from '../../contexts/ClientContext';

const Home: React.FC = () => {
  const { mail } = useMail();
  const { client } = useClient();
  const { pidgey } = usePidgey();

  const allLetterDeliveredByPidgeys = Array.isArray(pidgey)
    ? pidgey.map(pidgey => pidgey.letterDelivered)
    : [];

  const totalLetterDeliveredByPidgeys = allLetterDeliveredByPidgeys.reduce(
    (total, letterDelivered) => total + letterDelivered,
    0
  );

  const allRetiredPidgeys = Array.isArray(pidgey)
    ? pidgey.filter(pidgey => {
        return pidgey.status === 'aposentado';
      })
    : [];

  const allLettersDeliveredRecently = Array.isArray(mail)
    ? mail.filter(mail => {
        const createdAt = mail.createdAt ? new Date(mail.createdAt) : null;
        const now = new Date();
        if (!createdAt) return false;
        const diffDays = Math.floor(
          (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
        );
        return diffDays <= 30;
      })
    : [];

  return (
    <>
      <main className="flex flex-col px-5 ">
        <h1 className="px-3 text-3xl md:text-3xl lg:text-5xl">
          Painel de Dados
        </h1>
        <div className="row">
          <div className="dashboard-card">
            Total de Cartas no sistema
            <span>{mail.length}</span>
          </div>
          <div className="dashboard-card">
            Total de Cartas entregues
            <span>{totalLetterDeliveredByPidgeys}</span>
          </div>
          <div className="dashboard-card">
            Clientes Cadastrados
            <span>{client.length}</span>
          </div>
          <div className="dashboard-card">
            Pombos Cadastrados
            <span>{pidgey.length}</span>
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
                {allLettersDeliveredRecently.map(mail => (
                  <tr key={mail.id}>
                    <td>{mail.title}</td>
                    <td>
                      <Link
                        to={`/cartas/verificar/${mail.id}`}
                        className="button is-small"
                      >
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))}
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
                {allRetiredPidgeys.map(pidgey => (
                  <tr key={pidgey.id}>
                    <td>{pidgey.nickname}</td>
                    <td>
                      <Link
                        to={`/pombos/verificar/${pidgey.id}`}
                        className="button is-small"
                      >
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
