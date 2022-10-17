//  Hien Nguyen 
//  CIS 255
//  HW4 

// get the borderChar from the html textbox
const borderChar = document.querySelector("#borderChar")
// get the innerChar from the html textbox
const innerChar = document.querySelector("#innerChar")

// get the div containing the result from html file
const divResult = document.querySelector("#result")

// create the paragraph element
const message = document.createElement("p")

// number of outer and inner rows --> constants
const rowInner = 24;
const rowOuter = 28;

// the number of symbols each line
const N = (rowOuter / 2) + 1;

// boolean variable is used in the do-while loops to check if the input from a user is valid
let validInput = true;

// time variable for using the hourglass 
let time = 0;
// used in the do-while loop to take the command from a user
let userInput = "";
let outerMaterial = "";
let innerMaterial = "";
let empty = "\xa0"

// --------------------------------------------------------------------------------------------------------------
// function is used to show how the hourglass works according to the time
function displayHourglass(innerMaterial, outerMaterial, time) {

  // // i is used for the number of rows
  for (let i = N; i >= 2; i--) {
    // create div2 that will contain every single row

    let div2 = document.createElement("div")
    // j loop executes the white space presenting in the graph
    for (let j = 1; j <= N - i; j++) {
      // create paragraph element
      let ele1 = document.createElement("p")
      ele1.style.display = "inline"
      // ele1.style.whiteSpace = "normal"
      ele1.innerText = empty
      // append the child to div
      div2.appendChild(ele1)
      // append those rows to result area in html file
      divResult.appendChild(div2)
    }

    // k is for building the outermaterial of the hourglass
    for (let k = 1; k <= i; k++) {
      // create paragraph element
      let ele3 = document.createElement("p")

      // change the display property to "inline" because p element is a block element
      ele3.style.display = "inline"
      if (k === 1 || k === i || i === N) {
        // add the outerMaterial and whitespace to ele3 
        ele3.innerText = outerMaterial + empty;

      }
      else if (i >= N - time) {
        // ele3.style.whiteSpace = "pre"
        ele3.innerText = empty + empty

      }
      else {
        ele3.innerText = innerMaterial + empty
      }

      div2.appendChild(ele3)
      divResult.appendChild(div2)
    }


  }

  // the following codes is for building the hourglass
  //  // the following codes is for building the hourglass
  for (let i = 2; i <= N; i++) {
    let div = document.createElement("div")
    for (let j = 1; j <= N - i; j++) {
      let ele = document.createElement("p")

      ele.style.display = "inline"
      // ele.style.whiteSpace = "normal"

      ele.innerText = empty
      div.appendChild(ele)
      divResult.appendChild(div)
    }

    for (let k = 1; k <= i; k++) {
      let ele2 = document.createElement("p")
      ele2.style.display = "inline"
      if (k === 1 || k === i || i === N) {

        ele2.innerText = outerMaterial + empty;

      }
      else if (i < N - time) {

        // ele2.style.whiteSpace = "pre"
        ele2.innerText = empty + empty;

      }
      else {
        ele2.innerText = innerMaterial + empty;
      }

      div.appendChild(ele2)
      divResult.appendChild(div)
    }

  }
}

// below is used to clear the result and display the new one depending on the command
function clearDisplay() {
  while (divResult.firstChild) {
    divResult.removeChild(divResult.firstChild)
  }
}

// show alert for the user know that they enter the wrong input
function showAlert(){
  const alertMessage = "Invalid input! Only one char allowed for each textbox. Try again!"
  alert(alertMessage)
}


// get the values from text fields and display the initial hourglass (time = 0)
function display() {
  
  // get the input from a user
  // if the user enter more than 1 char in each textbox, we will clear it and show alert
  if (borderChar.value.length > 1 || innerChar.value.length > 1){
    borderChar.value =""
    innerChar.value =""
    showAlert()
  }
  else {
    // assign the borderChar to outerMaterial
    outerMaterial = borderChar.value

    // assign the innerChar to innerMaterial
    innerMaterial = innerChar.value
    clearDisplay()
    // set the initial time
    time = 0
    // display the initial hourglass
    displayHourglass(innerMaterial, outerMaterial, time)
  }
}
// function is used for next command
function next() {

  // clear the hourglass to display a new one
  clearDisplay()

  // time only belongs to range [0,12]
  if (time >= 0 && time < 12) {
    time++;
    
    displayHourglass(innerMaterial, outerMaterial, time)
  }
  else {
    displayHourglass(innerMaterial, outerMaterial, time = 0)
  }


}

// function is used for nexus command
function nexus() {
  // clear the hourglass to display a new one
  clearDisplay()

  time = 0;
  displayHourglass(innerMaterial, outerMaterial, time)

}

// function is used for previous command
function previous() {

  // clear the hourglass to display a new one
  clearDisplay()

  // time only belongs to range [0,12]
  if (time > 0 && time <= 12) {
    time--;
    displayHourglass(innerMaterial, outerMaterial, time)
  }
  else {
    displayHourglass(innerMaterial, outerMaterial, time = 0)
  }
}
