import { useEffect, useState } from 'react';
import { getPets } from '../services/pets';

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
    <main>
      {PetsList.map(
        ({ id, name, breed, age, species, gender, url, adopted }) => (
          <div key={id}>
            <img src={url} alt={breed} />
            <h3>
              {name} - {age} ano(s)
            </h3>
            <p>
              {species} - {gender}
            </p>
            {adopted ? <p>Adotado</p> : null}
          </div>
        )
      )}
    </main>
  );
}

export default Pets;
