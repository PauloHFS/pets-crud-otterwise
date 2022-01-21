import { useEffect, useState } from 'react';
import { getPets } from '../../services/pets';

import './styles.css';

function Pets() {
  const [PetsList, setPetsList] = useState([]);
  useEffect(() => {
    const request = async () => {
      const response = await getPets();
      console.log('response', response);
      setPetsList(response.data.pets);
    };
    request();
  }, []);

  return (
    <main className="cards">
      {PetsList !== [] ? (
        PetsList.map(
          ({ id, name, breed, age, species, gender, url, adopted }) => (
            <div key={id} className="card">
              <img src={url} alt={breed} className="card-image" />
              <div className="card-info">
                <h3>
                  {name} - {age} ano(s)
                </h3>
                <p>
                  {species} - {gender}
                </p>
                {adopted ? <p>Adotado</p> : null}
              </div>
            </div>
          )
        )
      ) : (
        <h2>Carregando...</h2>
      )}
    </main>
  );
}

export default Pets;
