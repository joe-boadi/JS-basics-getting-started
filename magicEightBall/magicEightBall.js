// 1. initialize username to empty string.
const userName = 'Joe'; 

// 2. Ternary to greet user.
userName ? console.log(`Hello ${userName}`) : console.log('Hello');

// 3. Question by user.
const userQuestion = 'Will I get a car soon';

//
console.log(`${userName} asked, ${userQuestion}?`);

const randomNumber = Math.floor(Math.random() *8);
let eightBall = '';

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    
    case 1:
        eightBall = 'It is decidedly so';
        break;
    
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    
    case 3:
        eightBall = 'Cannot predict now';
        break;

    case 4:
        eightBall = 'Do not count on it';
        break;

    case 5:
        eightBall = 'My sources say no';
        break;

    case 6:
        eightBall = 'Outlook not so good';

    case 7:
        eightBall = 'Signs point to yes';
        break;

    default:
        eightBall = 'Keep believing.';
        break;
}

console.log(`The magic eight ball answer to you question is: ${eightBall}`);

