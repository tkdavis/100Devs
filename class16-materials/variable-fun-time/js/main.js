//create a variable and assign it a number
let num = 1;
//minus 10 from that number
num -= 10;
//print that number to the console
console.log(num);

//create a variable that holds the h1
const myHeader = document.querySelector('h1');
//add an event listener to that element that console logs the sum of the two previous variables
myHeader.addEventListener('click', () => {
  //create a variable that holds a value from the input
  let inputVal = Number(document.getElementById('danceDanceRevolution').value);
  //add 25 to that number
  inputVal += 25;
  //alert that number
  alert(inputVal);
  console.log(num + inputVal);
})
