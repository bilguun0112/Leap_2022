
/*
*
*
*  Example - 2 : Tic Tac Toe
*  | col1| col2| col3|
*  |  x  |  o  |  x  | => row1
*  |  o  |  o  |  x  | => row2
*  |  x  |  x  |  0  | => row3
*

*
*
**
*

*
*
*
**/

// let row1 = ['x', 'o', 'x'];
// let row2 = ['o', 'o', 'x'];
// let row3 = ['x', 'x', 'o'];
// console.log(row1);
// console.log(row2);
// console.log(row3);

let tictactoe = [['x', 'o', 'x'],['o', 'o', 'x'],['x', 'x', 'o']];
console.log(tictactoe);

// console.log(tictactoe[1][1]);

// console.log('for loop with for loop');
// // tictactoe-ийн бүх мөрний елементүүдийг хэвлэж харуулна уу ?
// for(let i = 0;i < tictactoe.length; i++){
//     // console.log(tictactoe[i]);
//     /// double FOR loops
//     let output = '';
//     let input = prompt('X O');
//     for(let j = 0; j < tictactoe[i].length; j++){
//         output = output + " | " + tictactoe[i][j] + " | "; 
//     }
//     console.log(output);
// }


//input- ээр тухайн tictactoe-ийн баганын болоод мөрийн индексийг
//дарааллуулж аваад 3 дахь удаад нь юугаар солихийг нь өгнө.


// for(let i = 0;i <= tictactoe.length; i++){
//     // console.log(tictactoe[i]);
//     /// double FOR loops

//     let output = '';
//     let input = prompt('gsdfjhsdf');
//     for(let j = 0; j <= tictactoe[i].length; j++){
//         output = output + " | " + tictactoe[i][j] + " | "; 
//         tictactoe[i][j] = input;
//     }
//     console.log(tictactoe);
// }
