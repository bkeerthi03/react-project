import './App.css';
import { useState } from 'react';
import  Gallery  from './Gallery';
import { Profile } from './Gallery';
import { people } from './data';
const user = {
  name: 'John'
};
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
    width: '500px'
  }
};
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function MyButton() {
  function alertClick() {
    alert('You clicked me!');
  }

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    '.jpg'
  );
}
export function Profile1() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
  }

export function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
function Item({ name, isPacked }) {
  // if (isPacked) {
  //   return <li className="item">{name} ✔</li>;
  // }
  // if (isPacked) {
  //   return null;
  // }
  // return <li className="item">{name}</li>;
  return (
    // <li className="item">
    //   {isPacked ? name + ' ✔' : name}
    // </li>
    // <li className="item">
    //   {isPacked ? (
    //     <del>
    //       {name + ' ✔'}
    //     </del>
    //   ) : (
    //     name
    //   )}
    // </li>
    <li className="item">
    {name} {isPacked && '✔'}
  </li>
  );
}

export function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={false} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
export function List() {
  const filteredList = people.filter(x => x.profession=='chemist')
  const listItems = filteredList.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}


function App() {
  return (
    <div>
      <h1 className="title">Welcome to {user.name}</h1>
      <MyButton />
      <ShoppingList />
      <MyButton />
      <Profile />
      <TodoList />
      <Profile1 />
      <PackingList />
      <List />
    </div>
  );
}

export default App;
