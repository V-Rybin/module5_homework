let X = prompt();
let Y = +X;

console.log(typeof Y);

if (Y % 2 === 0){
  console.log("четное");
}else{
  console.log("Упс, кажется, вы ошиблись")
}