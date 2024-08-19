import {useEffect, useState } from "react";
import  hangman  from '../../../public/hangman.webp';
import { pictures } from "../pictures";


export function Alphabet(params) {  
    const {word, actWord} = params;
    const [won, setWon] = useState('')
    const [win, setWin] = useState(readScoreWin);
    const [lose, setLose] = useState(readScoreLose);
    const [lifes, setLifes] = useState(6);
    const [guess, setGuess] = useState(word);
    const [disable, setDisable] = useState(false);
    const keyboard = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
    const btn = keyboard.map(symbol => <button  disabled={disable} onClick={e => checkLetter(e)} key={symbol}>{symbol}</button>);
    

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
        };        
    };

    useEffect(checkWin, [guess]);
    function checkWin () {
        if (!guess.includes('_')) {
            document.getElementById('root').style.backgroundColor = 'grey';
            btn.map(() => setDisable(true));
            setWin(prev => prev + 1);
            setWon  (
                <div className="won">
                    <p>YOU WON!</p>
                    <button className="playAgain" onClick={() => playAgain()}>Play again</button>
                </div>
            );
        };
    };
 
    useEffect(checkLose, [lifes]);
    function checkLose () {
        if (lifes === 0) {
            document.getElementById('root').style.backgroundColor = 'grey';
            btn.map(() => setDisable(true));
            setLose (prev => prev + 1);
            setWon  (
                <div className="lose">
                    <p>YOU LOSE!</p>
                    <button className="playAgain" onClick={() => playAgain()}>Play again</button>
                </div>
            );
        };
    };

    function saveScore () {
        const score = {win: win, lose: lose};
        localStorage.setItem('score', JSON.stringify(score));    
    }

    function readScoreWin () {
        const localData = JSON.parse(localStorage.getItem('score'));
        if (localData) {
            return localData.win;
        }  else {
            return 0;
        }   
    }

    function readScoreLose () {
        const localData = JSON.parse(localStorage.getItem('score'));
        if (localData) {
            return localData.lose;
        }  else {
            return 0;
        }   
    }

    useEffect (() => saveScore(),[lose, win])

    function playAgain () {
        window.location.reload();    
    }

    function resetScore () {
        setWin(0);
        setLose(0);
    }

    return   (
        <>
        <p>Lifes left: {lifes}</p>
        <div className='hanger'>
          <div>
            <p>WIN: {win}</p>
            <p>LOSE: {lose}</p>
            <button className="resetScore" onClick={resetScore}>Reset score</button>
          </div>
          <div className="image">
          <img src={hangman} alt="hanger Logo" />
          <div className="hangman">
          <img src={pictures[lifes]} alt="" />
          </div>
          {won}
          </div>
        </div>
        <p className='word'>{guess}</p>
        <div className='keyboard'>
            {btn}
        </div>
        </>
        
    );    
}