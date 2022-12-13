function validation(inputs) {
    // энд та нарт бүх input орж ирж байгаа зөв эсэхийг дараах байдалаар шалгана
    // 2 password хоорондоо адил байгаа эсэх
    // password ийн урт 8с урт байх ёстой
    // email дотор заавал @ болон . орсон байх
    // эдгээр нөхцөл биелсэн бол true буцаана

   let password = inputs.psw;
   let repPassword = inputs.repeatPsw;
   let email = inputs.email;
   let emailCheck = email.value.includes("@", 0);
   let emailCheck1 = email.value.includes(".", 0);
   let checkPassword = password.value.length === repPassword.value.length;
   let checkPasswordLength = password.value.length > 8;

console.log(emailCheck);

//    if (checkPassword && checkPasswordLength && emailCheck && emailCheck1) {
//     return true;
//    }

    //жишээ хэрэглээ
    console.log("Email input ийн урт: ", inputs.email.value.length);
    return false;
  }
  
  // бүх input үүдийг inputs-д авч байна
  const inputz = document.getElementsByTagName("input");
  // хэдэн input байгааг тоолж байна
  const howManyInputs = document.getElementsByTagName("input").length;
  
  for (let i = 0; i < howManyInputs; i++) {
    // input бүрт addEventListener өгч change эвэнтийг сонсож байна
    inputz[i].addEventListener("change", () => {
      // input ийн утга өөрчлөгдөх бүрт 3н input үүдийн утгуудыг харж болно
      console.log("Email-ийн утга: ", inputz.email.value);
      console.log("Password-ийн утга: ", inputz.psw.value);
      console.log("repeatPsw-ийн утга: ", inputz.repeatPsw.value);
  
      // бүх input үүдийг авч зөв эсэхийг шалгах фүнкц дуудаж байна
      if (validation(inputz)) {
        document.querySelector(".registerBtn").disabled = false;
      }
    })
  }
