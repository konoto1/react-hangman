import  hangman  from '../public/hangman.webp';
import { Alphabet } from './data/components/Alphabet.jsx';
import { words } from './data/words.js';

function App() {
  let word = '';
  const calc = Math.floor(Math.random() * words.length);

  return (
    <>
    <div className='main'>
      <img src={hangman} alt="" />
      <p>{words[calc].text}</p>
      <Alphabet/>
    </div>
    </>

  )
}

export default App
