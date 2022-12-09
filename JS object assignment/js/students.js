let students = [
    {
        name: "Гончигсумлай", 
        birthOfYear: 1999, 
        hobby: "морь", 
        single: false
    },
    {
        name: "Гончигсум", 
        birthOfYear: 1998, 
        hobby: "машин", 
        single: false
    },
    {
        name: "Гончиг", 
        birthOfYear: 2000, 
        hobby: "бөмбөг", 
        single: false
    },
    {
        name: "Гонгор", 
        birthOfYear: 2001, 
        hobby: "дугуй", 
        single: true
    }
]

function age(array) {
    for (let i = 0 ; i < array.length ; i++) {
        let ages = 2022 - array[i].birthOfYear;
        if (ages > 20){
            console.log(array[i].name);
        }
    }
}

age(students);

function findAge(array) {
    for (let i = 0 ; i < array.length ; i++) {
        let ages = 2022 - array[i].birthOfYear;
        console.log(array[i].name + ' - ' + ages);
    }
}

findAge(students);


function single(array) {
    for(let i = 0 ; i < array.length ; i++) {
        if(array[i].single === false) {
            console.log(array[i].name + ' - ' + 'single');
        } else {
            console.log(array[i].name + ' - ' + 'couple');
        }
    }
}

single(students)