import { useState } from "react";

export function Alphabet(params) {  
    const {word, actWord} = params;
    const [guess, setGuess] = useState(word)
    let keyboard = "QWERTYUIOPASDFGHJKLZXCVBNM";
    keyboard = keyboard.split('');
    const btn = keyboard.map(symbol => <button onClick={e => checkLetter(e)} key={symbol}>{symbol}</button>);
    

    function checkLetter (e) {
        e => e.preventDefault();
        console.log(actWord);
        console.log(e.target.textContent);
        const guessWord = [...guess.split('')];
        if (actWord.includes(e.target.textContent)) {
            
            function test () {
                const result = guessWord
                .map((letter, index) => actWord[index] === e.target.textContent ? 
                index = e.target.textContent : 
                index = '_' ).join('');
               return result;
            }
            setGuess(test());
             
            
            console.log(guess);
            
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