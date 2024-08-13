
import  hangman  from '../public/hangman.webp';
import { Alphabet } from './data/components/Alphabet.jsx';
import { words } from './data/words.js';


function App() {

  const calc = Math.floor(Math.random() * words.length);
  const actWord = words[calc].text;
  const word = '_'.repeat(words[calc].text.length);


  return (
    <>
    <div className='main'>
      <h1>Hangman</h1>
      <p>Guess the word!</p>
      <div className='game'>
        <img src={hangman} alt="" />
        <p className='word'>{word}</p>
        <div className='keyboard'>
          <Alphabet word={word} actWord={actWord}/>
        </div>
        </div>
      </div>
    </>

  )
}

export default App
