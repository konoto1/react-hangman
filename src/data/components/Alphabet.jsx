import { useState } from "react";

export function Alphabet(props) {
    const {word, actWord} = props;
    const [quess, setGuess] = useState(word)
    let keyboard = "QWERTYUIOPASDFGHJKLZXCVBNM";
    keyboard = keyboard.split('');
    const btn = keyboard.map(symbol => <button onClick={e => checkLetter(e)} key={symbol}>{symbol}</button>);
    

    function checkLetter (e) {
        e => e.preventDefault();
        console.log(actWord);
        console.log(e.target.textContent);
        
        if (actWord.includes(e.target.textContent)) {
            function test () {
               return (quess
                .split('')
                .map((letter, index) => actWord[index] === e.target.textContent ? 
                index = e.target.textContent : 
                index = '_' )).join('');
            }
            setGuess(test());
             
            
            console.log(test());
            
        }
        
        
    }

    return   (
        btn 
    );    
}