import {useState } from "react";

export function Alphabet(params) {  
    const {word, actWord} = params;
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
        }  
    }

    return   (
        <>
        <p className='word'>{guess}</p>
        <div className='keyboard'>
            {btn}
        </div>
        </>
        
    );    
}