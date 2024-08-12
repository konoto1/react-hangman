import  hangman  from '../public/hangman.webp';
import { Alphabet } from './data/components/Alphabet.jsx';
import { words } from './data/words.js';

function App() {
  const calc = Math.floor(Math.random() * words.length);

  return (
    <>
    <div className='main'>
      <h1>Hangman</h1>
      <p>Guess the word!</p>
      <div className='game'>
        <img src={hangman} alt="" />
        <p className='word'>{words[calc].text}</p>
        <div className='keyboard'>
          <Alphabet/>
        </div>
        </div>
      </div>
    </>

  )
}

export default App
