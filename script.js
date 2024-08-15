var slider = document.getElementById("myRange");
var output = document.getElementById("agenumber");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

function calculate(){
  var gender = document.getElementsByName('gender');
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