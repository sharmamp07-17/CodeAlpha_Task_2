// COLOUR CHANGED WHEN WE CLICK ON COLOUR_BTN BUTTON

const containerBox = document.querySelector(".container");
const clr_btn = document.getElementById('colorbtn');


const colorChange = () => {
  let color_number = Math.floor(Math.random() * 16777215);
  let color_code = "#" + color_number.toString(16);
  containerBox.style.background = color_code;
  clr_btn.style.boxShadow = "0 0 10px #000";
  console.log(color_code);
};

clr_btn.addEventListener("click", colorChange);

// GREETING MSG ACCD. TO THE CURRENT TIME WHEN WE CLICK ON GREETING BUTTON 

const greeting_btn = document.getElementById('greeting');

let cuur = new Date();
console.log(cuur.getHours());
let Hrs = cuur.getHours();
function greetingMsg() {
  if (Hrs >= 3 && Hrs < 12) {
    alert("Good Morning")
  }
  else if (Hrs >= 12 && Hrs < 17) {
    alert("Good Afternoon")
  }
  else if (Hrs >= 17 && Hrs < 21) {
    alert("Good Evening")
  }
  else if (Hrs >= 21 || Hrs < 3) {
    alert("Good Night")
  }
};

greeting_btn.addEventListener("click", greetingMsg);




// APPLY FUNCTION ON BUTTON TO WORK PROPERLY

const display_text = document.querySelector("input");
const Buttons = document.querySelectorAll('.button');
Buttons.forEach(btn => btn.addEventListener("click", () => {
  display_text.value += btn.innerText;
  enableOperator();
}));

// Show result

const result_btn = document.getElementById('result');
result_btn.addEventListener("click", () => {
  try {
    display_text.value = eval(display_text.value);
    // disableOperator()
  }
  catch {
    display_text.value = "ERR_R";
    disableOperator()
    setInterval(() => {
      display_text.value = ""
    }, 1000);
  }
});

// Clear Screen

const clear_Screen = document.getElementById("clear");
clear_Screen.addEventListener("click", () => { display_text.value = "0"; disableOperator() });

const delete_1 = document.getElementById("delete1");
delete_1.addEventListener("click", () => display_text.value = display_text.value.slice(0, -1));

const disableOperator = () => {
  result_btn.disabled = true;
  clear_Screen.disabled = true;
  delete_1.disabled = true;
};
const enableOperator = () => {
  result_btn.disabled = false;
  clear_Screen.disabled = false;
  delete_1.disabled = false;
};

window.onload = () => {
  disableOperator();
}