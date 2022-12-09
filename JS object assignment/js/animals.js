
function howDoesTheFoxSay(array, animalType) {
    for( let i = 0; i < array.length; i++){
        // console.log(array[i].type);

        if (array[i].type === animalType) {
            console.log(array[i].sound +  ' - ' + array[i].sound +  ' - ' + array[i].sound);
        }
    }
}



let animals = [
    {
        type: 'dog',
        sound: 'woof'
    },
    {
        type: 'cow',
        sound: 'mooo'
    },
    {
        type: 'cat',
        sound: 'meow'
    }
]

console.log('Dog barking');
howDoesTheFoxSay(animals,'dog'); // Woof-woof-woof

console.log('Dog mooing');
howDoesTheFoxSay(animals,'cow'); // moo-moo-moo

console.log('Dog meowing');
howDoesTheFoxSay(animals,'cat'); // meow-meow-meow

