let pageNumber = 0;

var slider = document.getElementById("myRange");

var output = document.getElementById("agenumber");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

function agePoints(age,gender){
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

  let arrayToUse = gender === "female" ? arrayFemale : arrayMale;
  return arrayToUse.find(({min,max}) => age >= min && age <= max)?.points;
}

function totalCholesterolPoints(age,gender,cholesterolIndex){
  let arrayFemale = [
    {min:20,max:39,points:[0,4,8,11,13]},
    {min:40,max:49,points:[0,3,6,8,10]},
    {min:50,max:59,points:[0,2,4,5,7]},
    {min:60,max:69,points:[0,1,2,3,4]},
    {min:70,max:79,points:[0,1,1,2,2]}
  ];

  let arrayMale = [
    {min:20,max:39,points:[0,4,7,9,11]},
    {min:40,max:49,points:[0,3,5,6,8]},
    {min:50,max:59,points:[0,2,3,4,5]},
    {min:60,max:69,points:[0,1,1,2,3]},
    {min:70,max:79,points:[0,0,0,1,1]}
  ];

  let arrayToUse = gender === "female" ? arrayFemale : arrayMale;
  let cholesterolArray = arrayToUse.find(({min,max}) => age >= min && age <= max)?.points;
  return cholesterolArray[cholesterolIndex];
}

function smokerPoints(age,gender,smoker){
  let arrayFemale = [
    {min:20,max:39,points:9},
    {min:40,max:49,points:7},
    {min:50,max:59,points:4},
    {min:60,max:69,points:2},
    {min:70,max:79,points:1}
  ];

  let arrayMale = [
    {min:20,max:39,points:8},
    {min:40,max:49,points:5},
    {min:50,max:59,points:3},
    {min:60,max:69,points:1},
    {min:70,max:79,points:1}
  ];

  let arrayToUse = gender === "female" ? arrayFemale : arrayMale;
  return smoker === "smoker" ? arrayToUse.find(({min,max}) => age >= min && age <= max)?.points : 0;
}

function hdlCholesterolPoints(hdlIndex){
  let arrayBothGender = [-1,0,1,2];

  return arrayBothGender[hdlIndex];
}

function bloodPressurePoints(gender,bloodPressureIndex,treat){
  let arrayFemale = [
    {treated:0,bloodPressure:[0,1,2,3,4]},
    {treated:1,bloodPressure:[0,3,4,5,6]}
  ];

  let arrayMale = [
    {treated:0,bloodPressure:[0,0,1,1,2]},
    {treated:1,bloodPressure:[0,1,2,2,3]}
  ];

  let arrayToUse = gender === "female" ? arrayFemale : arrayMale;
  let bloodPressureArray = arrayToUse.find(({treated}) => treated === Number(treat))?.bloodPressure;
  return bloodPressureArray[bloodPressureIndex];
}

function calculateRisk(){
  var gender = document.getElementsByName('gender');
  var age = document.getElementById("myRange").value;
  // console.log("Age: " + age);
  var smoking = document.getElementsByName('smoking');
  var totalcholesterol = document.getElementById('total-cholesterol').value;
  var hdlcholesterol = document.getElementById('hdl-cholesterol').value;
  var bloodpressure = document.getElementById('blood-pressure').value;
  var treat = document.getElementsByName("treat");

  for(i=0;i<gender.length;i++){
    if(gender[i].checked){
      // console.log("Gender: " + gender[i].value);
      gender = gender[i].value;
    }
  }

  for(i=0;i<smoking.length;i++){
    if(smoking[i].checked){
      // console.log("Smoker: " + smoking[i].value);
      smoking = smoking[i].value;
    }
  }

  for(i=0;i<treat.length;i++){
    if(treat[i].checked){
      // console.log("Systolic blood pressure, mm Hg: " + treat[i].value + " and " + bloodpressure);
      treat = treat[i].value
    }
  }

  // console.log("Total cholesterol: " + totalcholesterol);
  // console.log("hdl cholesterol: " + hdlcholesterol);

  // console.log("agePoints: " + agePoints(age,gender));
  // console.log("totalCholesterolPoints: " + totalCholesterolPoints(age,gender,totalcholesterol));
  // console.log("smokerPoints: " + smokerPoints(age,gender,smoking));
  // console.log("hdlCholesterolPoints: " + hdlCholesterolPoints(hdlcholesterol));
  // console.log("bloodPressurePoints: " + bloodPressurePoints(gender,bloodpressure,treat));

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

  let arrayToUse = gender === "female" ? arrayFemale : arrayMale;
  let totalPoints = agePoints(age,gender) + totalCholesterolPoints(age,gender,totalcholesterol) + smokerPoints(age,gender,smoking)
  + hdlCholesterolPoints(hdlcholesterol) + bloodPressurePoints(gender,bloodpressure,treat);
  let answer = arrayToUse.find(({min,max}) => totalPoints >= min && totalPoints <= max)?.result;
  console.log("With " + totalPoints + " total points, the 10-year risk is " + answer);
}

function next(){
  pagenumber++;
  checkPage();
}

function restart(){
  pagenumber = 0; 
  checkPage();
}

function previous(){
  pagenumber--;
  checkPage();
}

function checkPage(){
  var pageOne = document.getElementById("page-one");
  var pageTwo = document.getElementById("page-two");
  var pageThree = document.getElementById("page-three");
  var pageFour = document.getElementById("page-four");
  var pageFive = document.getElementById("page-five");
  let pageArray = [pageOne,pageTwo,pageThree,pageFour,pageFive];
  for(let i = 0; i<pageArray.length;i++){
    if(i===pagenumber){
      pageArray[i].style.display = "block";
    }
    else{
      pageArray[i].style.display = "none";
    }
  }
}
