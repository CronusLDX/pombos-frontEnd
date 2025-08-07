import React from 'react';
import { Main, StyledLinkAtualizar, StyledLnkVer } from './styled';

const ListClients: React.FC = () => {
  return (
    <Main>
      <table>
        <thead>
          <tr>
            <th className="text-center">Id</th>
            <th className="text-center">Nome</th>
            <th className="text-center">Cartas Enviadas</th>
            <th className="text-center">Cartas Recebidas</th>
            <th className="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center text-lg font-normal">
              aaaaa-xxxxxx-xxxxxx
            </td>
            <td className="text-center text-lg font-normal">João Claúdio</td>
            <td className="text-center text-lg font-normal">12</td>
            <td className="text-center text-lg font-normal">5</td>
            <td>
              <StyledLnkVer
                to={`/clientes/verificar`}
                className="transition-all ease-in-out duration-300"
              >
                Ver
              </StyledLnkVer>
              <StyledLinkAtualizar
                to={`/clientes/atualizar`}
                className="transition-all ease-in-out duration-300"
              >
                Atualizar
              </StyledLinkAtualizar>
              <button
                id="delete-button"
                className="transition-all ease-in-out duration-300"
              >
                Remover
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Main>
  );
};

export default ListClients;
