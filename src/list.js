import { useState } from 'react';

let nextId = 0;

// export default function List1() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//        setArtists( // Replace the state
//        [ // with a new array
//          ...artists, // that contains all the old items
//          { id: nextId++, name: name } // and one new item at the end
//        ]
//      );
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];
export function DeleteList() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(
      initialArtists
    );
    const [list, setList] = useState(initialArtists);

    function handleClick() {
        // const insertAt = 1; // Could be any index
        // const nextArtists = [
        //   // Items before the insertion point:
        //   ...artists.slice(0, insertAt),
        //   // New item:
        //   { id: nextId++, name: name },
        //   // Items after the insertion point:
        //   ...artists.slice(insertAt)
        // ];
        // setArtists(nextArtists);
        // setName('');
        const nextList = [...list];
    nextList.reverse();
    setList(nextList);
      }
    
    return (
      <>
        <h1>Inspiring sculptors:</h1>
        {/* <ul>
          {artists.map(artist => (
            <li key={artist.id}>
              {artist.name}{' '}
              <button onClick={() => {
                setArtists(
                  artists.filter(a =>
                    a.id !== artist.id
                  )
                );
              }}>
                Delete
              </button>
            </li>
          ))}
        </ul> */}
         {/* <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul> */}
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {list.map(artwork => (
          <li key={artwork.id}>{artwork.name}</li>
        ))}
      </ul>
      </>
    );
  }
  
