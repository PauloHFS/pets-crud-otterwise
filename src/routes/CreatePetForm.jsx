import React from 'react';

import { postPet } from '../services/pets';

export default function CreatePetForm() {
  const handleSubmitForm = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      breed: formData.get('breed'),
      age: formData.get('age'),
      species: formData.get('species'),
      gender: formData.get('gender'),
      /* tutor: formData.get('tutor'), */
      url: formData.get('image'),
    };

    const response = postPet(data);
    console.log(response);
  };
  return (
    <main>
      <h1>Create Pet</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" placeholder="Tótó" />
        <label htmlFor="breed">Raça</label>
        <input type="text" name="breed" placeholder="Pitbull" />
        <label htmlFor="age">Idade</label>
        <input type="number" name="age" placeholder="2" />
        <label htmlFor="species">Espécie</label>
        <select name="species">
          <option value="cachorro">Cachorro</option>
          <option value="gato">Gato</option>
        </select>
        <label htmlFor="gender">Gênero</label>
        <select name="gender">
          <option value="macho">Macho</option>
          <option value="femea">Fêmea</option>
        </select>
        <label htmlFor="tutor">Tutor</label>
        <input type="text" name="tutor" placeholder="João" />
        <label htmlFor="image">Imagem</label>
        <input
          type="url"
          name="image"
          placeholder="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fpetcaramelo.com%2Fwp-content%2Fuploads%2F2018%2F12%2Fpitbull.jpg%3Fssl%3D1&f=1&nofb=1"
        />
        <button>Create</button>
      </form>
    </main>
  );
}
