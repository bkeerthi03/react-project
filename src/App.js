import './App.css';
import { useState } from 'react';
const user = {
  name: 'John'
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
function App() {
  return (
    <div>
      <h1 className="title">Welcome to {user.name}</h1>
      <MyButton />
      <ShoppingList />
      <MyButton />
    </div>
  );
}

export default App;
