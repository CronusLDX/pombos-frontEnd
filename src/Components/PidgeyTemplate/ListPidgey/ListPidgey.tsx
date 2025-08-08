import React from 'react';
import { Main, StyledLinkAtualizar, StyledLnkVer } from './styled';
import { usePidgey } from '../../../contexts/PidgeyContext';

const ListPidgey: React.FC = () => {
  const { pidgey, deletePidgey } = usePidgey();
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
          {pidgey.map(pidgey => (
            <tr key={pidgey.id}>
              <td className="text-center  font-normal items-center justify-center flex">
                <img src={pidgey.picture} alt="imagem" className=" h-12" />
              </td>
              <td className="text-center  font-normal">{pidgey.nickname}</td>
              <td className="text-center  font-normal">
                {pidgey.letterDelivered}
              </td>
              <td className="text-center  font-normal">{pidgey.status}</td>
              <td className="text-center">
                <StyledLnkVer
                  to={`/pombos/verificar/${pidgey.id}`}
                  className="transition-all ease-in-out duration-300"
                >
                  Ver
                </StyledLnkVer>
                <StyledLinkAtualizar
                  to={`/pombos/atualizar/${pidgey.id}`}
                  className="transition-all ease-in-out duration-300"
                >
                  Atualizar
                </StyledLinkAtualizar>
                <button
                  id="delete-button"
                  className="transition-all ease-in-out duration-300 bg-[#dc143c] hover:bg-red-600"
                  onClick={() => (pidgey.id ? deletePidgey(pidgey.id) : '')}
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

export default ListPidgey;
