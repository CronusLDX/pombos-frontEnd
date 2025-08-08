import React from 'react';
import { Main, StyledLinkAtualizar, StyledLnkVer } from './styled';
import { useClient } from '../../../contexts/ClientContext';

const ListClients: React.FC = () => {
  const { client, deleteClients } = useClient();

  if (!Array.isArray(client)) return <p>Carregando...</p>;
  return (
    <Main>
      <table>
        <thead>
          <tr>
            <th className="text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
              Id
            </th>
            <th className="text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
              Nome
            </th>
            <th className="text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
              Cartas Enviadas
            </th>
            <th className="text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
              Email
            </th>
            <th className="text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {client.map(client => (
            <tr key={client.id}>
              <td className="text-center   font-normal">{client.id}</td>
              <td className="text-center  font-normal">{client.name}</td>
              <td className="text-center  font-normal">{client.letterSend}</td>
              <td className="text-center  font-normal">{client.email}</td>
              <td className="text-center flex flex-col lg:block">
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
