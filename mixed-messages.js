const handSigns = ['rock', 'paper', 'scissors'];
let names = ['Darcey', 'Morris', 'Drew', 'Homer', 'Ruby', 'Ronnie', 'Mateusz', 'Cloe', 'Vera'];

function randomElement(array)
{
    return Math.floor(Math.random() * array.length);
}


function randomGame()
{
    const handSign1 = handSigns[randomElement(handSigns)];
    const name1 = names[randomElement(names)];
    names = names.filter(name => name !== name1);
    const handSign2 = handSigns[randomElement(handSigns)];
    const name2 = names[randomElement(names)];

    console.log(names);

    console.log(`${name1} and ${name2} are playing a game of rock, paper, scissors`);
    console.log(`${name1} is picking ${handSign1}`);
    console.log(`${name2} is picking ${handSign2}`);

    console.log(handSign1);
    console.log(handSign2);
    if((handSign1 === 'rock' && handSign2 === 'scissors') || (handSign1 === 'paper' && handSign2 === 'rock') || (handSign1 === 'scissors' && handSign2=== 'paper'))
    {
        console.log(`Result: ${name1} won!`);
    }
    else if (handSign1 == handSign2)
    {
        console.log('Result: tie!');
    }
    else 
    {
        console.log(`Result: ${name2} won!`) 
    }
}

randomGame();