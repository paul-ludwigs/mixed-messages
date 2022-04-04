const handSigns = ['rock', 'paper', 'scissors'];
const names = ['Darcey', 'Morris', 'Drew', 'Homer', 'Ruby', 'Ronnie', 'Mateusz', 'Cloe', 'Vera'];

function randomElement(array)
{
    return Math.floor(Math.random * array.length);
}

function randomGame()
{
    const handSign = handSigns[randomElement(handSigns)];
    const name = names[randomElement(names)];
}