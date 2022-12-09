console.log("Day-19 JS object");

let teacherDorj = {
  firstName : 'Dorj',
  lastName : 'Bold',
  age : 40,
  experience : 10,
  children : [],
  isMarried : true,
  address : {
    district : 'BGD',
    khoroolol : '2-r',
    khoroo : '1-r',
    houseNumber : '016',
    doorNumber : '4'
  },
  GPA : 95.5,

  introduction: function() {
    console.log(`Миний нэрийг ${this.lastName}-ийн ${this.firstName} гэдэг.
    Би ${this.age} настай. Би ${this.experience}-н жилийн ажлын туршлагатай. 
    Би ${this.address.district}-т амьдардаг. `);
  }
}

teacherDorj.introduction()

let teacherDorjColone = teacherDorj;

// teacherDorjColone.firstName = 'Dorj Colone';
// console.log(teacherDorj.firstName);
// console.log(teacherDorjColone.firstName);

let teacherDorjRealColone = {...teacherDorj};
teacherDorjRealColone.firstName = 'Dorj Real Clone';
console.log(teacherDorj.firstName);
console.log(teacherDorjRealColone.firstName);

console.log(Object.keys(teacherDorj));
console.log(Object.values(teacherDorj));

// let newTeacher = Object.create({
//   firstName: 'firstName',
//   lastName: 'lastName'
// })
// console.log(newTeacher);

// Object.assign({

// }, newTeacher)