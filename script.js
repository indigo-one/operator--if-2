/*

let btn = document.querySelector("#btn");

btn.style.fontSize = "30px";
btn.style.backgroundColor = "aqua";
btn.style.width = "150px";
btn.style.height = "50px";
btn.style.borderRadius = "40px";
btn.style.borderTop = "none";
btn.style.borderLeft = "none";
btn.style.outline = "none";
btn.style.color = "#fff";

function question() {
  let a = prompt("Угадай номер подьезда по номеру квартиры");
  if (a > 0 && a <= 20) {
    alert("1й подьезд");
    btn.style.color = "#000";
  } else if (a > 20 && a <= 30) {
    alert("2й подьезд");
  } else if (a > 30 && a <= 40) {
    alert("3й подьезд");
  } else {
    alert("Такой квартиры нет");
  }
}

btn.onclick = question;
*/
let r = Math.random();
r = r * 10;
r = Math.round(r);
console.log(r);

let userNum = document.querySelector("#user-num");

document.querySelector("#btn").onclick = checkNum;

function checkNum() {
  let num = userNum.value; //проверяет введенные числа
  num = parseInt(num);
  console.log(num);
  if (isNaN(num)) {
    alert("Введите корректное число");
  } 
  else {
    if (num == r) {
      alert("Вы угадали!)");
      location.reload();
      alert("Давай заново");
    } 
    else {
      alert("Мимо, давай еще!");
    }
  }
}
