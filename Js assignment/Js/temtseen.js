let [A1, A2, A3] = [prompt('A1'), prompt('A2'), prompt('A3')];
let avarageA = (Number(A1) + Number(A2) + Number(A3)) / 3;
let [B1, B2, B3] = [prompt('B1'), prompt('B2'), prompt('B3')];
let avarageB = (Number(B1) + Number(B2) + Number(B3)) / 3;


if (avarageA < 100 || avarageB < 100) {
    console.log('No Winner');
} else if (avarageA == avarageB) {
    console.log('Draw');
} else if (avarageA < avarageB) {

    console.log('Winner B team');
} else {
    console.log('Winner A team');
}