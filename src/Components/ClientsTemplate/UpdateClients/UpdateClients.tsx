import React from 'react';
import { Main } from './styled';

const UpdateClients: React.FC = () => {
  return (
    <>
      <Main>
        <form>
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
              <label htmlFor="observation">&nbsp;Observação:</label>
              <input
                type="text"
                id="observation"
                name="observation"
                placeholder="Ex: Observação"
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="letterSend">&nbsp;Cartas enviadas</label>
              <input type="number" id="letterSend" name="letterSend" required />
            </div>
            <div>
              <label htmlFor="letterReceived">&nbsp;Cartas recebidas</label>
              <input type="number" id="letterReceived" name="letterReceived" />
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
      <footer className="flex justify-center text-center items-center">
        Criado em: &nbsp; <span>{new Date().toLocaleString()}</span> &nbsp; |
        &nbsp; ID: <span>&nbsp;{Math.floor(Math.random() * 100000000)}</span>{' '}
        &nbsp; | &nbsp; Atualizado em:{' '}
        <span>&nbsp;{new Date().toLocaleString()}</span>
      </footer>
    </>
  );
};

export default UpdateClients;
