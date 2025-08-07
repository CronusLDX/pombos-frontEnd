import React from 'react';
import { Main, StyledLink } from './styled';

const ShowMail: React.FC = () => {
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
            ></textarea>
          </div>
          <button type="button">
            <StyledLink to="/cartas">Voltar</StyledLink>
          </button>
        </form>
      </Main>
      <footer className="flex justify-center text-center items-center">
        Criado em: &nbsp; <span>{new Date().toLocaleString()}</span> &nbsp; |
        &nbsp; ID: <span>&nbsp;{Math.floor(Math.random() * 100000000)}</span>{' '}
        &nbsp; | &nbsp; Atualizado em:{' '}
        <span>&nbsp;{new Date().toLocaleString()}</span>
      </footer>
    </>
  );
};

export default ShowMail;
