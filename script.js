// get slider and output by Id 
var slider = document.getElementById("myRange");
var output = document.getElementById("agenumber");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// get age points based on age and gender
function agePoints(age,gender){
  // points for female; depending on age range (min/max)
  let arrayFemale = [
    {min:20,max:34,points:-7},
    {min:35,max:39,points:-3},
    {min:40,max:44,points:0},
    {min:45,max:49,points:3},
    {min:50,max:54,points:6},
    {min:55,max:59,points:8},
    {min:60,max:64,points:10},
    {min:65,max:69,points:12},
    {min:70,max:74,points:14},
    {min:75,max:79,points:16},
  ];

  // points for male; depending on age range (min/max)
  let arrayMale = [
    {min:20,max:34,points:-9},
    {min:35,max:39,points:-4},
    {min:40,max:44,points:0},
    {min:45,max:49,points:3},
    {min:50,max:54,points:6},
    {min:55,max:59,points:8},
    {min:60,max:64,points:10},
    {min:65,max:69,points:11},
    {min:70,max:74,points:12},
    {min:75,max:79,points:13}
  ];

  // if gender parameter is female use arrayFemale, else use arrayMale
  let arrayToUse = gender === "female" ? arrayFemale : arrayMale;
  // return the points where the age parameter is between min/max range
  return arrayToUse.find(({min,max}) => age >= min && age <= max)?.points;
}

// get total cholesterol points based on age, gender and total cholesterol (index is user input of dropdown box)
function totalCholesterolPoints(age,gender,cholesterolIndex){
  // points for female; depending on age range (min/max) and total cholesterol (array)
  let arrayFemale = [
    {min:20,max:39,points:[0,4,8,11,13]},
    {min:40,max:49,points:[0,3,6,8,10]},
    {min:50,max:59,points:[0,2,4,5,7]},
    {min:60,max:69,points:[0,1,2,3,4]},
    {min:70,max:79,points:[0,1,1,2,2]}
  ];

  // points for male; depending on age range (min/max) and total cholesterol (array)
  let arrayMale = [
    {min:20,max:39,points:[0,4,7,9,11]},
    {min:40,max:49,points:[0,3,5,6,8]},
    {min:50,max:59,points:[0,2,3,4,5]},
    {min:60,max:69,points:[0,1,1,2,3]},
    {min:70,max:79,points:[0,0,0,1,1]}
  ];

  // if gender parameter is female use arrayFemale, else use arrayMale
  let arrayToUse = gender === "female" ? arrayFemale : arrayMale;
  // find the correct total cholesterol points array to use based on age range
  let cholesterolArray = arrayToUse.find(({min,max}) => age >= min && age <= max)?.points;
  // return the points based on the option the user picked (index is user input of dropdown box)
  return cholesterolArray[cholesterolIndex];
}

// get smoker points based on age, gender and if they are a smoker
function smokerPoints(age,gender,smoker){
  // points for female; depending on age range (min/max)
  let arrayFemale = [
    {min:20,max:39,points:9},
    {min:40,max:49,points:7},
    {min:50,max:59,points:4},
    {min:60,max:69,points:2},
    {min:70,max:79,points:1}
  ];

  // points for male; depending on age range (min/max)
  let arrayMale = [
    {min:20,max:39,points:8},
    {min:40,max:49,points:5},
    {min:50,max:59,points:3},
    {min:60,max:69,points:1},
    {min:70,max:79,points:1}
  ];

  // if gender parameter is female use arrayFemale, else use arrayMale
  let arrayToUse = gender === "female" ? arrayFemale : arrayMale;
  // if the input is smoker, return the points based on age; else return 0 points for non smoker
  return smoker === "smoker" ? arrayToUse.find(({min,max}) => age >= min && age <= max)?.points : 0;
}

// get hdl cholesterol points based on user input
function hdlCholesterolPoints(hdlIndex){
  let arrayBothGender = [-1,0,1,2];

  // return points based on user input in dropdown box
  return arrayBothGender[hdlIndex];
}

// get blood pressure points based on gender, blood pressure and treatment
function bloodPressurePoints(gender,bloodPressureIndex,treat){
  // points for female; depending on treatment (treated) and blood pressure (array)
  let arrayFemale = [
    {treated:0,bloodPressure:[0,1,2,3,4]},
    {treated:1,bloodPressure:[0,3,4,5,6]}
  ];

  // points for male; depending on treatment (treated) and blood pressure (array)
  let arrayMale = [
    {treated:0,bloodPressure:[0,0,1,1,2]},
    {treated:1,bloodPressure:[0,1,2,2,3]}
  ];

  // if gender parameter is female use arrayFemale, else use arrayMale
  let arrayToUse = gender === "female" ? arrayFemale : arrayMale;
  // find the correct blood pressure points array to use based on treatment
  let bloodPressureArray = arrayToUse.find(({treated}) => treated === Number(treat))?.bloodPressure;
  // return the points based on the option the user picked (index is user input of dropdown box)
  return bloodPressureArray[bloodPressureIndex];
}

// calculate the final risk score by summing all the points together and find percentage
function calculateRisk(){
  // get user input
  var gender = document.getElementsByName('gender');
  var age = document.getElementById("myRange").value;
  var smoking = document.getElementsByName('smoking');
  var totalcholesterol = document.getElementById('total-cholesterol').value;
  var hdlcholesterol = document.getElementById('hdl-cholesterol').value;
  var bloodpressure = document.getElementById('blood-pressure').value;
  var treat = document.getElementsByName("treat");

  // get radio button input of gender
  for(i=0;i<gender.length;i++){
    if(gender[i].checked){
      gender = gender[i].value;
    }
  }

  // get radio button input of smoking
  for(i=0;i<smoking.length;i++){
    if(smoking[i].checked){
      smoking = smoking[i].value;
    }
  }

  // get radio button input of hdl cholesterol treatment
  for(i=0;i<treat.length;i++){
    if(treat[i].checked){
      treat = treat[i].value
    }
  }

  // define female array for final risk output percentages based on total points range (min/max)
  let arrayFemale = [
    {min:-8,max:8,result:"<1%"},
    {min:9,max:12,result:"1%"},
    {min:13,max:14,result:"2%"},
    {min:15,max:15,result:"3%"},
    {min:16,max:16,result:"4%"},
    {min:17,max:17,result:"5%"},
    {min:18,max:18,result:"6%"},
    {min:19,max:19,result:"8%"},
    {min:20,max:20,result:"11%"},
    {min:21,max:21,result:"14%"},
    {min:22,max:22,result:"17%"},
    {min:23,max:23,result:"22%"},
    {min:24,max:24,result:"27%"},
    {min:25,max:46,result:"over 30%"}
  ];

  // define male array for final risk output percentages based on total points range (min/max)
  let arrayMale = [
    {min:-10,max:0,result:"<1%"},
    {min:1,max:4,result:"1%"},
    {min:5,max:6,result:"2%"},
    {min:7,max:7,result:"3%"},
    {min:8,max:8,result:"4%"},
    {min:9,max:9,result:"5%"},
    {min:10,max:10,result:"6%"},
    {min:11,max:11,result:"8%"},
    {min:12,max:12,result:"10%"},
    {min:13,max:13,result:"12%"},
    {min:14,max:14,result:"16%"},
    {min:15,max:15,result:"20%"},
    {min:16,max:16,result:"25%"},
    {min:17,max:37,result:"over 30%"}
  ];

  // if all radio buttons have input then calclulate final score
  if($('input[type=radio]:checked').length > 2){
    // if gender parameter is female use arrayFemale, else use arrayMale
    let arrayToUse = gender === "female" ? arrayFemale : arrayMale;

    // calculate total sum of all points; call all methods to get the points
    let totalPoints = agePoints(age,gender) + totalCholesterolPoints(age,gender,totalcholesterol) + smokerPoints(age,gender,smoking)
    + hdlCholesterolPoints(hdlcholesterol) + bloodPressurePoints(gender,bloodpressure,treat);
    let answer = arrayToUse.find(({min,max}) => totalPoints >= min && totalPoints <= max)?.result;

    // display final score on the page
    var output = document.getElementById("output");
    output.textContent = "Output: With " + totalPoints + " total points, the 10-year risk is " + answer;
  }
  else{
    alert("Not all radio buttons have options selected");
    restart();
  }

}

let pageNumber = 0;
// go to the next page when user clicks the next button
function next(){
  pagenumber++;
  checkPage();
}

// go back to the first page when user click the restart button
function restart(){
  pagenumber = 0; 
  checkPage();
}

// go to the previous page when user clicks the previous button
function previous(){
  pagenumber--;
  checkPage();
}

// check which pages should/shouldnt be displayed based on the page number
function checkPage(){
  // get all page html from Id
  var pageOne = document.getElementById("page one");
  var pageTwo = document.getElementById("page two");
  var pageThree = document.getElementById("page three");
  var pageFour = document.getElementById("page four");
  var pageFive = document.getElementById("page five");

  // put them all in an array for indexing using pagenumber variable
  let pageArray = [pageOne,pageTwo,pageThree,pageFour,pageFive];

  // get all buttons from Id
  var bPrevious = document.getElementById("b-prev");
  var bNext = document.getElementById("b-next");
  var bRestart = document.getElementById("b-restart");

  // hide restart and previous buttons on the first page
  if(pagenumber===0){
    bPrevious.style.display = "none";
    bRestart.style.display = "none";
  }
  else{
    bPrevious.style.display = "block";
    bRestart.style.display = "block";
  }

  // hide next button on the last page
  if(pagenumber=== 4){
    bNext.style.display = "none";
  }
  else{
    bNext.style.display = "block";
  }

  // hide/display pages based on pagenumber index
  for(let i = 0; i<pageArray.length;i++){
    if(i===pagenumber){
      pageArray[i].style.display = "block";
    }
    else{
      pageArray[i].style.display = "none";
    }
  }
}
