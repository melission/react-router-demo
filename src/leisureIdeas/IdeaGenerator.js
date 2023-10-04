import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import ideas from "./ideas";
import "./ideas.css"

const storedMode = localStorage.getItem('colorMode')

const IdeaGenerator = () => {
  const [randomIdea, setRandomIdea] = useState('');
  let buttonTheme = storedMode === 'dark' ? 'outline-light' : "outline-dark"

  const pickRandomIdea = () => {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const selectedIdea = ideas[randomIndex].toString();
    // console.log(typeof selectedIdea)
    setRandomIdea(selectedIdea);
  };

  return (
    <div className='idea-block text-center'>
      <h2 className='idea-block_title'>Random Idea Generator</h2>
      <section className='idea-block_box idea-block_shadow'>
        <div className='idea-box_text'>{randomIdea}</div>
      </section>
      <Button className='idea-button' variant={buttonTheme} onClick={pickRandomIdea}>Generate Idea</Button>
    </div>
  );
};

export default IdeaGenerator;
