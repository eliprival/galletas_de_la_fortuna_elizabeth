import React from 'react';
import arr from '../utils/phrases.json'
import randomarr from '../services/randomarr';
import imageArr from '../utils/images.json'

const ShowButton = ({setRandomPhrase, setImage}) => {

  const handleClick = () => {
    const quote = randomarr (arr);
    setRandomPhrase(quote);
    const illustration = randomarr(imageArr)
    setImage(illustration);
  }

  return (
    <button onClick= {handleClick} className='app__button'>Ver otro</button>
  )
}

export default ShowButton;