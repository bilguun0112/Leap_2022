console.log("My function");



// function declaration - функцыг тодорхойлох
function f(params) {
    console.log("hello world™™¡£™¡¢£™¢£™¡™£¢∞§¶•ª");
}


//function call - функцыг дуудах

f();

// 1
/*. f(x) = x * x => x is parameter буюу функцын гаднаас авдаг хувьсагч

*/

function f1 (x , y) {
    console.log(x * x + y * y);
}

function f2 (x , y) {
    console.log(Math.pow((x + y) , 2));
}

function f3 (m, c) {
    console.log(m * Math.pow(c,2));
}
const c = 300000;
function f4(x) {
  let m = 1;
  for(let i=1; i<=x ; i++){
    m = m * i;
  }
  console.log(m);
}

function f5(x , y){
    console.log(Math.cos(x) - Math.sin(y));
}

function f6(x) { 
    console.log(Math.pow(x,3) + Math.pow(x,2) + 5 * x + 12);
}

function f7 (x) {
    console.log(Math.pow(x , 2));
}

function f8(x) {
    console.log(Math.sqrt(x));
    
}

f8(9)