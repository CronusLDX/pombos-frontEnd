import React from 'react';
import { Main, StyledLinkAtualizar, StyledLnkVer } from './styled';
import { useClient } from '../../../contexts/ClientContext';

const ListClients: React.FC = () => {
  const { client, deleteClients } = useClient();
  return (
    <Main>
      <table>
        <thead>
          <tr>
            <th className="text-center">Id</th>
            <th className="text-center">Nome</th>
            <th className="text-center">Cartas Enviadas</th>
            <th className="text-center">Email</th>
            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {client.map(client => (
            <tr key={client.id}>
              <td className="text-center  font-normal">{client.id}</td>
              <td className="text-center  font-normal">{client.name}</td>
              <td className="text-center  font-normal">{client.letterSend}</td>
              <td className="text-center  font-normal">{client.email}</td>
              <td>
                <StyledLnkVer
                  to={`/clientes/verificar/${client.id}`}
                  className="transition-all ease-in-out duration-300"
                >
                  Ver
                </StyledLnkVer>
                <StyledLinkAtualizar
                  to={`/clientes/atualizar/${client.id}`}
                  className="transition-all ease-in-out duration-300"
                >
                  Atualizar
                </StyledLinkAtualizar>
                <button
                  id="delete-button"
                  className="transition-all ease-in-out duration-300"
                  onClick={() => (client.id ? deleteClients(client.id) : null)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Main>
  );
};

export default ListClients;
