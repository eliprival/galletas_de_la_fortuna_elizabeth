import { useState } from 'react';
import './App.css';
import ShowButton from './Components/ShowButton';
import ShowPhrase from './Components/ShowPhrase';
import randomarr from './services/randomarr';
import arr from './utils/phrases.json';
import imagesArr from './utils/images.json'


function App() {
  
  const quote = randomarr(arr);
  const [randomPhrase, setRandomPhrase] = useState(quote);

  const illustration = randomarr(imagesArr)
  const [image, setImage] = useState(illustration)
  
  const appStyles = {
    backgroundImage: `url(../fondo${image}.jpg)`
  }
  
  return (
    <div style= {appStyles} className='app'>
      <h1 className='app__title'>GALLETAS DE LA FORTUNA</h1>
      <ShowPhrase
        randomPhrase= {randomPhrase}
        />
        
      <ShowButton
         setRandomPhrase={setRandomPhrase}
         setImage={setImage}

      />
      
    </div>
  )
}

export default App
