import React from 'react';
import { Main } from './styled';
import { usePidgey } from '../../../contexts/PidgeyContext';

const CreatePidgey: React.FC = () => {
  const { handleSubmit } = usePidgey();
  return (
    <>
      <Main>
        <form onSubmit={handleSubmit}>
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
    </>
  );
};

export default CreatePidgey;
