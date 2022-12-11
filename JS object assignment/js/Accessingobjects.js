let students = [{
        name: 'Сэд-Эрдэнэ',
        age: 19,
        gender: "male"
    },
    {
        name: 'Индра',
        age: 19,
        gender: "female"
    },
    {
        name: 'Хатнаа ',
        age: 21,
        gender: "male"
    },
    {
        name: 'Тэмүүлэн',
        age: 23,
        gender: "male"
    },
    {
        name: 'Намуун',
        age: 23,
        gender: "female"
    },
];


// Хүйс тоолох


let maleCount = 0;
let femaleCount = 0;

function findGender(array) {
    for (let i = 0; i < array.length; i++) {

        if (array[i].gender === "male") {
            maleCount = maleCount + 1;
        } else {
            femaleCount = femaleCount + 1;
        }
    }
    console.log(maleCount + ' - ' + 'Male stundents in class');
    console.log(femaleCount + ' - ' + 'Female stundents in class');
}

findGender(students)

// Дундаж нас олох

let count = 0;

function avarageAgeStu(array) {

    for (let i = 0; i < array.length; i++) {
        count = count + array[i].age;
    }
    let age = count / array.length
    console.log('Avarage age ' + ' - ' + age);
}

avarageAgeStu(students)


// Овог нэмж оруулах

function giveName(count, givenName) {
    students[count].Lastname = givenName;
}

// Ижилхэн настай сурагчдыг олж шинэ array дотор хийх 
let sameAge = [];

for (let i = 0; i < students.length - 1; i++) {
    for (let j = i + 1; j < students.length; j++) {
        if (students[i].age === students[j].age) {
            sameAge.push(students[i], students[j])
        }
    }
}

console.log(sameAge);