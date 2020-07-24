import React, { useState, useEffect } from 'react';

export default function App(props) {

  const [techs, setTechs] = useState(['NodeJS', 'ReactJS']);
  const [newTech, setNewTech] = useState('');


  useEffect(() => {
    setTechs([...techs, props.techs]);
  }, []);

  function removeTech(tech) {
    setTechs(techs.filter(t => t !== tech));
  }

  function addTech(e) {
    e.preventDefault();
    if (!techs.find(t => t === newTech)) {
      setTechs([...techs, newTech]);
    }
    setNewTech('');
  }

  return (
    <>
      <h3>List of Technologies</h3>
      <form onSubmit={addTech}>
        <input
          onChange={(e) => setNewTech(e.target.value)}
          placeholder="Tech"
          value={newTech}
        />
        <button>add</button>
      </form>
      <ul>
        {
          techs.map(t => (
            <li key={t}>
              <span>{t}</span>
              <button onClick={() => removeTech(t)}>
                remove
              </button>
            </li>
          ))
        }
      </ul>
    </>
  );
}