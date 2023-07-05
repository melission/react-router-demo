import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import ideas from "./ideas";
import "./ideas.css"

const IdeaGenerator = () => {
  const [randomIdea, setRandomIdea] = useState('');

  const pickRandomIdea = () => {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const selectedIdea = ideas[randomIndex].toString();
    // console.log(typeof selectedIdea)
    setRandomIdea(selectedIdea);
  };

  return (
    <div className='idea-block text-center'>
      <h2 className='idea-block_title'>Random Idea Generator</h2>
      <section className='idea-block_box'>
        <div className='idea-box_text'>{randomIdea}</div>
      </section>
      <Button className='idea-button' variant="outline-dark" onClick={pickRandomIdea}>Generate Idea</Button>
    </div>
  );
};

export default IdeaGenerator;
