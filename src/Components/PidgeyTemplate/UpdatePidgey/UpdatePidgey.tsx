import React from 'react';
import { Main } from './styled';

const UpdatePidgey: React.FC = () => {
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
                required
              />
            </div>
            <div>
              <label htmlFor="nickname">&nbsp;Apelido:</label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="Ex: Gatilho"
                required
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
                required
              />
            </div>
            <div>
              <label htmlFor="status">&nbsp;Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                placeholder="Ex: Ativo ou Aposentado"
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
              <label htmlFor="letterDelivered">&nbsp;Cartas Entregues</label>
              <input
                type="number"
                id="letterDelivered"
                name="letterDelivered"
                required
              />
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

export default UpdatePidgey;
