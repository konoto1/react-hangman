
import { Alphabet } from './data/components/Alphabet.jsx';
import { words } from './data/words.js';


function App() {

  let calc = Math.floor(Math.random() * words.length);
  const actWord = words[calc].text;
  const word = '_'.repeat(words[calc].text.length);


  return (
    <>
      <div className='main'>
        <h1>Hangman</h1>
        <p>Guess the word!</p>
        <div className='game'>
          <Alphabet word={word} actWord={actWord}/>
        </div>
      </div>
    </>

  )
}

export default App
