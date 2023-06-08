import React, { useState } from 'react';
import ideas from "./ideas";

const IdeaGenerator = () => {
  const [randomIdea, setRandomIdea] = useState('');

  const pickRandomIdea = () => {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const selectedIdea = ideas[randomIndex];
    setRandomIdea(selectedIdea);
  };

  return (
    <div>
      <h2>Random Idea Generator</h2>
      <button onClick={pickRandomIdea}>Generate Idea</button>
      {randomIdea && <p>{randomIdea}</p>}
    </div>
  );
};

export default IdeaGenerator;
