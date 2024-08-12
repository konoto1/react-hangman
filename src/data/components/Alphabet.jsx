export function Alphabet() {
    let keyboard = "QWERTYUIOPASDFGHJKLZXCVBNM";
    keyboard = keyboard.split('');
    return   (
        keyboard.map(symbol => <button key={symbol}>{symbol}</button>)
    );    
}