import React from 'react';
import { Main, StyledLink } from './styled';

const ShowPidgey: React.FC = () => {
  return (
    <>
      <Main>
        <form>
          <section>
            <div>
              <label htmlFor="picture">&nbsp;Foto:</label>
              <input
                type="text"
                id="picture"
                name="picture"
                placeholder="URL da imagem"
                disabled
              />
            </div>
            <div>
              <label htmlFor="nickname">&nbsp;Apelido:</label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="Ex: Gatilho"
                disabled
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="averageSpeed">&nbsp;Velocidade Média km/h</label>
              <input
                type="number"
                id="averageSpeed"
                name="averageSpeed"
                placeholder="Ex: 50"
                disabled
              />
            </div>
            <div>
              <label htmlFor="status">&nbsp;Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                placeholder="Ex: Ativo ou Aposentado"
                disabled
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="dateOfBirth">&nbsp;Data de Nascimento:</label>
              <input type="date" id="dateOfBirth" name="dateOfBirth" disabled />
            </div>

            <div>
              <label htmlFor="letterDelivered">&nbsp;Cartas Entregues</label>
              <input
                type="number"
                id="letterDelivered"
                name="letterDelivered"
                disabled
              />
            </div>
          </section>
          <div>
            <label htmlFor="description">&nbsp;Descrição:</label>
            <textarea
              id="description"
              name="description"
              placeholder="Ex: Descrição"
              disabled
            ></textarea>
          </div>
          <button type="button">
            <StyledLink to="/pombos">Voltar</StyledLink>
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

export default ShowPidgey;
