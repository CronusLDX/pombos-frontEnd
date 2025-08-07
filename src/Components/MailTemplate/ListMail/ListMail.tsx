import React from 'react';
import { Main, StyledLinkAtualizar, StyledLnkVer } from './styled';

const ListMail: React.FC = () => {
  return (
    <>
      <Main>
        <table>
          <thead>
            <tr>
              <th className="text-center">Titulo</th>
              <th className="text-center">Remetente</th>
              <th className="text-center">Destinatário</th>
              <th className="text-center">Pombo-correio</th>
              <th className="text-center">Status</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center text-lg font-normal">
                Carta à senhora Gertrudes
              </td>
              <td className="text-center text-lg font-normal">João Claúdio</td>
              <td className="text-center text-lg font-normal">Gertrudes</td>
              <td className="text-center text-lg font-normal">Gatilho</td>
              <td className="text-center text-lg font-normal">Na fila</td>
              <td>
                <StyledLnkVer
                  to={`/cartas/verificar`}
                  className="transition-all ease-in-out duration-300"
                >
                  Ver
                </StyledLnkVer>
                <StyledLinkAtualizar
                  to={`/cartas/atualizar`}
                  className="transition-all ease-in-out duration-300"
                >
                  Atualizar
                </StyledLinkAtualizar>
                <button
                  id="changeStatus-button"
                  className="transition-all ease-in-out duration-300 bg-amber-500 hover:bg-amber-600"
                >
                  Mudar Status
                </button>
                <button
                  id="delete-button"
                  className="transition-all ease-in-out duration-300 bg-[#dc143c] hover:bg-red-600"
                >
                  Remover
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </Main>
    </>
  );
};

export default ListMail;
