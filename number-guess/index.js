const randomNumber = Math.floor(Math.random() * 101)

const setMessage = (message) => {
    document.getElementById('message').innerText = message
}
const checkGuess = () => {
    const guess = parseInt(document.getElementById('guess_input').value)

    if (isNaN(guess) || guess < 1 || guess > 100){
        setMessage('Not a number between 1 - 100')
        return
    }

    if (guess == randomNumber) {
        setMessage('congrats') 
    }else if (guess < randomNumber) {
        setMessage('guess again')
    }

    console.log(guess)
}