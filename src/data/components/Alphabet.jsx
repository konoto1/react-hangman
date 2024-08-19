import {useState } from "react";
import  hangman  from '../../../public/hangman.webp';

export function Alphabet(params) {  
    const {word, actWord} = params;
    const [win, setWin] = useState(0);
    const [lose, setLose] = useState(0);
    const [lifes, setLifes] = useState(6);
    const [guess, setGuess] = useState(word);
    const keyboard = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
    const btn = keyboard.map(symbol => <button style={{}} disabled={false} onClick={e => checkLetter(e)} key={symbol}>{symbol}</button>);
    

    function checkLetter (e) {
        e => e.preventDefault();
            e.target.disabled = true;
            
        if (actWord.includes(e.target.textContent)) {
                setGuess(prev => prev
                .split('')
                .map((letter, index) => actWord[index] === e.target.textContent 
                ? letter = e.target.textContent : letter !== '_'
                ? letter = letter 
                : letter = '_' ).join('')
            );  
                e.target.style.backgroundColor = 'lightGreen';
        }  else {
                e.target.style.backgroundColor = '#f27878';
                setLifes(prev => prev - 1);
        }  
    }

    return   (
        <>
        <p>Lifes left: {lifes}</p>
        <div className='hanger'>
          <div>
            <p>WIN: {win}</p>
            <p>LOSE: {lose}</p>
          </div>
          <img src={hangman} alt="" />
        </div>
        <p className='word'>{guess}</p>
        <div className='keyboard'>
            {btn}
        </div>
        </>
        
    );    
}