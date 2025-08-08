import React from 'react';
import { Main, StyledLinkAtualizar, StyledLnkVer } from './styled';
import { usePidgey } from '../../../contexts/PidgeyContext';

const ListPidgey: React.FC = () => {
  const { pidgey, deletePidgey } = usePidgey();

  if (!Array.isArray(pidgey)) return <p>Carregando...</p>;
  return (
    <Main>
      <table className="w-full h-full justify-center items-center text-center">
        <thead>
          <tr>
            <th className=" text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
              Foto
            </th>
            <th className=" text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
              Apelido
            </th>
            <th className=" text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
              Cartas Entregues
            </th>
            <th className=" text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
              Status
            </th>
            <th className=" text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {pidgey.map(pidgey => (
            <tr key={pidgey.id}>
              <td className="text-center  font-normal">
                <div className="flex justify-center items-center h-full">
                  <img
                    src={pidgey.picture}
                    alt="imagem"
                    className="h-12 object-cover rounded"
                  />
                </div>
              </td>
              <td className="text-center text-[12px] md:text-[14px] lg:text-[16px]  font-normal">
                {pidgey.nickname}
              </td>
              <td className="text-center text-[12px] md:text-[14px] lg:text-[16px]  font-normal">
                {pidgey.letterDelivered}
              </td>
              <td className="text-center text-[12px] md:text-[14px] lg:text-[16px] font-normal">
                {pidgey.status}
              </td>
              <td className="text-center flex flex-col lg:block ">
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
