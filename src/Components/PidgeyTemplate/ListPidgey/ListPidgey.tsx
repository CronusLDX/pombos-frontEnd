import React from 'react';
import { Main, StyledLinkAtualizar, StyledLnkVer } from './styled';
import logo from '../../../assets/logo.svg';

const ListPidgey: React.FC = () => {
  return (
    <Main>
      <table className="w-full">
        <thead>
          <tr>
            <th className=" text-center">Foto</th>
            <th className=" text-center">Apelido</th>
            <th className=" text-center">Cartas Entregues</th>
            <th className=" text-center">Status</th>
            <th className=" text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center text-lg font-normal items-center justify-center flex">
              <img src={logo} alt="imagem" className=" h-16" />
            </td>
            <td className="text-center text-lg font-normal">Gatilho</td>
            <td className="text-center text-lg font-normal">12</td>
            <td className="text-center text-lg font-normal">Ativo</td>
            <td className="text-center">
              <StyledLnkVer
                to={`/pombos/verificar`}
                className="transition-all ease-in-out duration-300"
              >
                Ver
              </StyledLnkVer>
              <StyledLinkAtualizar
                to={`/pombos/atualizar`}
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
  );
};

export default ListPidgey;
