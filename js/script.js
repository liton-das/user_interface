// select the dom element
let form_bg = document.querySelector('.form_bg');
let my_inp= document.querySelector('.my_inp');
let my_btn= document.querySelector('.my_btn');
let label_text= document.querySelector('.label_text');
let result= document.querySelector('.result');
let head_text= document.querySelector('.head_text');
let user_inp_table = document.querySelector('.user_inp_table');
// user can select the color of the result
let red = document.querySelector('.red');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let dark = document.querySelector('.dark');
let user_color = document.querySelector('.user_color');
let color_text = document.querySelector('.color_text');
let isDisabled = false;
// for loop Example
// added the event for user input
my_btn.addEventListener('click', ()=>{
    result.innerHTML = ""; // Clear previous results
      for (let i = 1; i < 11; i++) {
        if (my_inp.value == '') {
          label_text.innerHTML = "Please enter a number!";
          label_text.style.color = "red";
          my_inp.focus()
          my_inp.style.border = "1px solid red";
          my_btn.innerHTML = 'Try Again';
          my_btn.style.backgroundColor = "red";
          head_text.innerHTML = 'OOps! Something went wrong';
          head_text.style.color = "red";
          result.innerHTML= 'Your Result Not Found';
          result.style.color = "red";
        } else {
            result.innerHTML += `${my_inp.value} X ${i} = ${my_inp.value * i} <br>`;
            label_text.innerHTML = "Great! Job!";
            label_text.style.color = "green";
            my_inp.style.border = "1px solid green";
            my_btn.innerHTML = 'Submited';
            my_btn.style.backgroundColor = "green";
            head_text.innerHTML = 'congratulations you did it';
            head_text.style.color = "green";
            user_inp_table.innerHTML =`your multiplication table is: ${my_inp.value}`;
            user_inp_table.style.color = "blue";
        }
      }
})


red.addEventListener("click", () => {
  if (!isDisabled) {
    red.disabled = true; // Disable the red button
    red.style.backgroundColor = "grey";
    blue.disabled = false; // Enable the green button
    blue.style.backgroundColor = 'blue'
    dark.disabled=false 
    dark.style.backgroundColor = "#000"
    green.disabled = false; // Enable the green button
  }
form_bg.style.backgroundColor = "lightcoral";
  green.style.backgroundColor = "green";
  result.style.backgroundColor = "lightpink";
  user_color.style.backgroundColor = "red";
  color_text.style.color = "red";
  color_text.innerHTML = "Your selected color : Red";
  
});
green.addEventListener('click',()=>{
    if(!isDisabled){
        red.disabled = false; // Disable the red button
        red.style.backgroundColor = "red";
        blue.disabled = false; // Disable the blue button
        blue.style.backgroundColor = "blue"
        green.disabled = true; // Disable the green button
        green.style.backgroundColor = "grey";
        dark.disabled=false
        dark.style.backgroundColor = "#000"
    }
    form_bg.style.backgroundColor = "lightgreen";
    result.style.color = "green";
    result.style.backgroundColor = "lightgreen";
    user_color.style.backgroundColor = "green";
    color_text.style.color = "green";
    color_text.innerHTML = "Your selected color : Green";
})
blue.addEventListener('click',()=>{
    if(!isDisabled){
       red.disabled = false// Disable the red button
        red.style.backgroundColor = "red" 
        green.disabled = false; // Disable the green button
        green.style.backgroundColor = "green";
        dark.disabled=false
        dark.style.backgroundColor = "#000"
        blue.disabled = true; // Disable the blue button
        blue.style.backgroundColor = "grey";
    }
    form_bg.style.backgroundColor = "lightblue";
    result.style.color = "blue";
    result.style.backgroundColor = "lightblue";
    user_color.style.backgroundColor = "blue";
    color_text.style.color = "blue";
    color_text.innerHTML = "Your selected color : Blue";
})
dark.addEventListener('click',()=>{
    if(!isDisabled){
        red.disabled = false
        red.style.backgroundColor = "red"
        blue.disabled=false
        blue.style.backgroundColor = "blue"
        green.disabled = false 
        green.style.backgroundColor = "green"
        dark.disabled = true
        dark.style.backgroundColor = 'gray'
    }
    form_bg.style.backgroundColor = "#000";
    form_bg.style.color = "#fff";
    result.style.color = "#fff";
    result.style.backgroundColor = "#000";
    user_color.style.backgroundColor = "#000";
    color_text.style.color = "#000";
    color_text.innerHTML = "Your selected color : Dark";
})