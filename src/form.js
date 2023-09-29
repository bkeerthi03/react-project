import { useState } from 'react';
import { useImmer } from 'use-immer';
export default function Form() {
    const [person, setPerson] = useState({
      firstName: 'Barbara',
      lastName: 'Hepworth',
      email: 'bhepworth@sculpture.com'
    });
    const [person1, updatePerson1] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
      });
      function handleCityChange(e) {
        updatePerson1(draft => {
            draft.artwork.city = e.target.value;
          });
      }
    
    function handleFirstNameChange(e) {
    //   person.firstName = e.target.value;
    setPerson({
        ...person,
        firstName: e.target.value
      });
    }
  
    function handleLastNameChange(e) {
    //   person.lastName = e.target.value;
    setPerson({
        ...person,
        lastName: e.target.value
      });
    }
  
    function handleEmailChange(e) {
    //   person.email = e.target.value;
    setPerson({
        ...person,
        email: e.target.value
      });
    }
  
    return (
      <>
        <label>
          First name:
          <input
            value={person.firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last name:
          <input
            value={person.lastName}
            onChange={handleLastNameChange}
          />
        </label>
        <label>
          Email:
          <input
            value={person.email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          City:
          <input
            value={person1.artwork.city}
            onChange={handleCityChange}
          />
        </label>
        <p>
          {person.firstName}{' '}
          {person.lastName}{' '}
          ({person.email})
          {person1.artwork.city}
        </p>
      </>
    );
  }
  