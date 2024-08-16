let pageNumber = 1;
let ageArray = [['female',-7],['female',-3],['female',0],['female',3],['female',6],['female',8],['female',10],['female',12],['female',14],['female',16]
                ['male',-9],['male',-4],['male',0],['male',3],['male',6],['male',8],['male',10],['male',11],['male',12],['male',13]];

var slider = document.getElementById("myRange");
var output = document.getElementById("agenumber");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

function calculate(){
  var gender = document.getElementsByName('gender');
  var age = document.getElementById("myRange").value;
  console.log("Age: " + age);
  var smoking = document.getElementsByName('smoking');
  var totalcholesterol = document.getElementById('total-cholesterol').value;
  var hdlcholesterol = document.getElementById('hdl-cholesterol').value;
  var bloodpressure = document.getElementById('blood-pressure').value;
  var treat = document.getElementsByName("treat");

  for(i=0;i<gender.length;i++){
    if(gender[i].checked){
      console.log("Gender: " + gender[i].value);
    }
  }

  for(i=0;i<smoking.length;i++){
    if(smoking[i].checked){
      console.log("Smoker: " + smoking[i].value);
    }
  }

  for(i=0;i<treat.length;i++){
    if(treat[i].checked){
      console.log("Systolic blood pressure, mm Hg: " + treat[i].value + " and " + bloodpressure);
    }
  }

  console.log("Total cholesterol: " + totalcholesterol);
  console.log("hdl cholesterol: " + hdlcholesterol);

  let ageIndex;
  if(age<35){
    ageIndex = 0;
  }
  else if(age<40){
    ageIndex = 1;
  }
  else if(age<45){
    ageIndex = 2;
  }
  else if(age<50){
    ageIndex = 3;
  }
  else if(age<55){
    ageIndex = 4;
  }
  else if(age<60){
    ageIndex = 5;
  }
  else if(age<65){
    ageIndex = 6;
  }
  else if(age<70){
    ageIndex = 7;
  }
  else if(age<75){
    ageIndex = 8;
  }
  else if(age<80){
    ageIndex = 9;
  }

  if(gender == 'male'){
    ageIndex += 10;
  }


  console.log("Output: " + );
}

function next(){
  pagenumber++;
  checkPage();
}

function restart(){
  pagenumber = 1; 
  checkPage();
}

function previous(){
  pagenumber--;
  checkPage();
}

var pageOne = document.getElementById("page-one");
var pageTwo = document.getElementById("page-two");
var pageThree = document.getElementById("page-three");
var pageFour = document.getElementById("page-four");
var pageFive = document.getElementById("page-five");
function checkPage(){
  if(pagenumber == 1){
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
    pageThree.style.display ="none";
    pageFour.style.display= "none";
    pageFive.style.display="none";
  }
  else if(pagenumber ==2){
    pageOne.style.display = "none";
    pageTwo.style.display = "block";
    pageThree.style.display ="none";
    pageFour.style.display= "none";
    pageFive.style.display="none";
  }
  else if(pagenumber ==3){
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display ="block";
    pageFour.style.display= "none";
    pageFive.style.display="none";
  }
  else if(pagenumber ==4){
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display ="none";
    pageFour.style.display= "block";
    pageFive.style.display="none";
  }
  else if(pagenumber ==5){
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display ="none";
    pageFour.style.display= "none";
    pageFive.style.display="block";
  }
}
