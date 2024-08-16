let pageNumber = 1;

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
    pageOne.style.display("hidden");
    pageTwo.style.display("visible");
    pageThree.style.display("hidden");
    pageFour.style.display("hidden");
    pageFive.style.display("hidden");
  }
  else if(pagenumber ==3){
    pageOne.style.display("hidden");
    pageTwo.style.display("hidden");
    pageThree.style.display("visible");
    pageFour.style.display("hidden");
    pageFive.style.display("hidden");
  }
  else if(pagenumber ==4){
    pageOne.style.display("hidden");
    pageTwo.style.display("hidden");
    pageThree.style.display("hidden");
    pageFour.style.display("visible");
    pageFive.style.display("hidden");
  }
  else if(pagenumber ==5){
    pageOne.style.display("hidden");
    pageTwo.style.display("hidden");
    pageThree.style.display("hidden");
    pageFour.style.display("hidden");
    pageFive.style.display("visible");
  }
}
