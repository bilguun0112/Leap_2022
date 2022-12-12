/** Game setup
    // user should guess a number
    * we need to create new ship on the board

*| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
*| x | x | 2 | x | 4 | 5 | x |

*/ 


let guesses = 0;
let isSunk = false ; 
let hit = 0;

let location1 = 1;
let location2 = 3;
let location3 = 6;


while(!isSunk || guesses > 6) {
    console.log ('game begins') 
    let userGuess = Number(prompt("Give me your position"));
    guesses = guesses + 1;
    if(guesses > 6) {
        console.log(guesses)
        break;
    }
    if(userGuess > 0 && userGuess < 7) {
        console.log(userGuess);

        if (location1 == userGuess || location2 == userGuess || location3 == userGuess) {
            hit = hit + 1;
            alert('You Hint');
            
            //if you hit the location1
            if(location1 == userGuess) {
                location1 = -1;
            }
            if(location2 == userGuess) {
                location2 = -1;
            }
            if(location3 == userGuess) {
                location3 = -1;
            }
        }else {
            alert('You miss');
        }
        console.log(hit);
        if (hit == 3 ) {
            isSunk = true;
            alert("You Win");
        }
    }else {
        alert('Give me numbers between 0 and 6'); 
    }
//   if (isSunk && guesses < 6 ) {
//     alert("You Win");
//   } else if (guesses > 6 ) {
//     alert("You Lost");
//   } else {
//     alert("You Lost");
//   }
}
alert('Game end');