import React from 'react';
import { Main } from './styled';
import { useMail } from '../../../contexts/MailContext';

const CreateMail: React.FC = () => {
  const { handleSubmit } = useMail();
  return (
    <>
      <Main>
        <form onSubmit={handleSubmit}>
          <section>
            <div>
              <label htmlFor="title">&nbsp;Título:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Carta À senhor Gertrudes"
                required
              />
            </div>
            <div>
              <label htmlFor="address">&nbsp;Endereço:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Ex: Rua dos Bobos Número 0"
                required
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
                required
              />
            </div>
            <div>
              <label htmlFor="remitter">&nbsp;Remetente:</label>
              <input
                type="text"
                id="remitter"
                name="remitter"
                placeholder="Ex: Sr.Jones"
                required
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
                required
              />
            </div>
            <div>
              <label htmlFor="status">&nbsp;Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                placeholder="Ex: Na fila"
                required
              />
            </div>
          </section>
          <div>
            <label htmlFor="content">&nbsp;Contéudo:</label>
            <textarea
              id="content"
              name="content"
              placeholder="Ex: Conteúdo da carta"
              required
            ></textarea>
          </div>
          <button id="save" type="submit">
            Salvar
          </button>
        </form>
      </Main>
    </>
  );
};

export default CreateMail;
