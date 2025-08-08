import React from 'react';
import { Main } from './styled';
import { useClient } from '../../../contexts/ClientContext';

const CreateClients: React.FC = () => {
  const { handleSubmit } = useClient();
  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            <label htmlFor="name">&nbsp;Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ex: João Pedro"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">&nbsp;Telefone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Ex: (11) 99999-9999"
              required
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="dateOfBirth">&nbsp;Data de Nascimento:</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" required />
          </div>
          <div>
            <label htmlFor="email">&nbsp;Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ex: exemplo@email.com"
              required
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="address">&nbsp;Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Ex: Rua dos Bobos Número 0"
              required
            />
          </div>

          <div>
            <label htmlFor="letterSend">&nbsp;Cartas enviadas</label>
            <input type="number" id="letterSend" name="letterSend" required />
          </div>
        </section>
        <div>
          <label htmlFor="description">&nbsp;Descrição:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Ex: Descrição"
          ></textarea>
        </div>
        <button id="save" type="submit">
          Salvar
        </button>
      </form>
    </Main>
  );
};

export default CreateClients;
