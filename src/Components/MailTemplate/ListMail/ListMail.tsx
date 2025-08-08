import React from 'react';
import { Main, StyledLinkAtualizar, StyledLnkVer } from './styled';
import { useMail } from '../../../contexts/MailContext';

const ListMail: React.FC = () => {
  const { mail, deleteMail } = useMail();
  if (!Array.isArray(mail)) return <p>Carregando...</p>;
  return (
    <>
      <Main>
        <table>
          <thead>
            <tr>
              <th className="text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
                Titulo
              </th>
              <th className="text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
                Remetente
              </th>
              <th className="text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
                Destinatário
              </th>
              <th className="text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
                Pombo-correio
              </th>
              <th className="text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
                Status
              </th>
              <th className="text-center  text-[9.5px] md:text-[14px] lg:text-[16px]">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {mail.map(mail => (
              <tr key={mail.id}>
                <td className="text-center  font-normal">{mail.title}</td>
                <td className="text-center  font-normal">{mail.remitter}</td>
                <td className="text-center  font-normal">{mail.destination}</td>
                <td className="text-center  font-normal">{mail.pidgey}</td>
                <td className="text-center  font-normal">{mail.status}</td>
                <td className="text-center flex flex-col lg:block">
                  <StyledLnkVer
                    to={`/cartas/verificar/${mail.id}`}
                    className="transition-all ease-in-out duration-300"
                  >
                    Ver
                  </StyledLnkVer>
                  <StyledLinkAtualizar
                    to={`/cartas/atualizar/${mail.id}`}
                    className="transition-all ease-in-out duration-300"
                  >
                    Atualizar
                  </StyledLinkAtualizar>

                  <button
                    id="delete-button"
                    className="transition-all ease-in-out duration-300 bg-[#dc143c] hover:bg-red-600"
                    onClick={() => (mail.id ? deleteMail(mail.id) : '')}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Main>
    </>
  );
};

export default ListMail;
