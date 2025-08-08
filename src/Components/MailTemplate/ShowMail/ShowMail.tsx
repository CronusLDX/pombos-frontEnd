import React from 'react';
import { Main, StyledLink } from './styled';
import { useMail } from '../../../contexts/MailContext';
import { useParams } from 'react-router-dom';

const ShowMail: React.FC = () => {
  const { id } = useParams();
  const { mail } = useMail();

  const foundData = mail.find(mail => String(mail.id) === String(id));

  if (!foundData) {
    return (
      <Main>
        <h1>Carta não encontrada</h1>
        <StyledLink to="/cartas">Voltar para lista</StyledLink>
      </Main>
    );
  }
  return (
    <>
      <Main>
        <form>
          <section>
            <div>
              <label htmlFor="title">&nbsp;Título:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Carta À senhor Gertrudes"
                disabled
                value={foundData.title}
              />
            </div>
            <div>
              <label htmlFor="address">&nbsp;Endereço:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Ex: Rua dos Bobos Número 0"
                disabled
                value={foundData.address}
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="destination">&nbsp;Destinatário:</label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Ex: Sr.Smith"
                disabled
                value={foundData.destination}
              />
            </div>
            <div>
              <label htmlFor="remitter">&nbsp;Remetente:</label>
              <input
                type="text"
                id="remitter"
                name="remitter"
                placeholder="Ex: Sr.Jones"
                disabled
                value={foundData.remitter}
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="mailPidgey">&nbsp;Pombo-correio</label>
              <input
                type="text"
                id="mailPidgey"
                name="mailPidgey"
                placeholder="Ex: Gatilho"
                disabled
                value={foundData.pidgey}
              />
            </div>
            <div>
              <label htmlFor="status">&nbsp;Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                placeholder="Ex: Na fila"
                disabled
                value={foundData.status}
              />
            </div>
          </section>
          <div>
            <label htmlFor="content">&nbsp;Contéudo:</label>
            <textarea
              id="content"
              name="content"
              placeholder="Ex: Conteúdo da carta"
              disabled
              value={foundData.content}
            ></textarea>
          </div>
          <button type="button">
            <StyledLink to="/cartas">Voltar</StyledLink>
          </button>
        </form>
      </Main>
      <footer className="flex justify-center text-center items-center">
        Criado em: &nbsp; <span>{foundData.createdAt}</span> &nbsp; | &nbsp; ID:{' '}
        <span>&nbsp;{foundData.id}</span> &nbsp; | &nbsp; Atualizado em:{' '}
        <span>&nbsp;{foundData.updatedAt}</span>
      </footer>
    </>
  );
};

export default ShowMail;
