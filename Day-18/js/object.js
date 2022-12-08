console.log('Lesson Objects');

let rabbit1 = {
    color: 'White',
    rName: 'Chaagii',
    gender: 'Male',
    age: 2,
    jump: function() {
        console.log('Sorry i broke my leg , i cannot jump');
    } ,
    sayMyName: function(myName) {
        console.log(`Yout name is ${myName}`);
    }
}

console.log(rabbit1);

console.log(rabbit1.color);
rabbit1.color = 'Shavhai'
rabbit1.jump()
rabbit1.sayMyName('Khangaikhuu');

let rabbit2 = {
    color: 'Brown',
    rName: 'Choogii',
    gender: 'Female',
    age: 1 ,
    jump: function() {
        console.log('i can jump');
    }
}

console.log('Here is rabbit 2 speaks');
console.log('#####@@@@@!!!!!!!!@#@!#!@#');

console.log(rabbit2);



let rabbits = [rabbit1, rabbit2];

console.log(rabbits);

console.log(rabbit2.jump);