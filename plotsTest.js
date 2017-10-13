var times = 1;
var times_406 = 1;
function display(){
  var x = document.getElementById("plotsName");
  var y = document.getElementById("plots");
  if(times%7 == 0){
    x.innerHTML = "# 404 before irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40400_Band1.png";
  }
  else if(times%7 == 1){
    x.innerHTML = "# 404 after 6 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40401_Band1.png";
  }
  else if(times%7 == 2){
    x.innerHTML = "# 404 after 12 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40402_Band1.png";
  }
  else if(times%7 == 3){
    x.innerHTML = "# 404 after 22.5 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40403_Band1.png";
  }
  else if(times%7 == 4){
    x.innerHTML = "# 404 after 45 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40404_Band1.png";
  }
  else if(times%7 == 5){
    x.innerHTML = "# 404 after 90 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40405_Band1.png";
  }
  else{
    x.innerHTML = "# 404 after 180 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40406_Band1.png";
   }



  times++;
}

function display406(){
  var x = document.getElementById("plotsName406");
  var y = document.getElementById("plots406");
  if(times_406%7 == 0){
    x.innerHTML = "# 406 before irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40600_Band1.png";
  }
  else if(times_406%7 == 1){
    x.innerHTML = "# 406 after 6 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40601_Band1.png";
  }
  else if(times_406%7 == 2){
    x.innerHTML = "# 406 after 12 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40602_Band1.png";
  }
  else if(times_406%7 == 3){
    x.innerHTML = "# 406 after 22.5 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40603_Band1.png";
  }
  else if(times_406%7 == 4){
    x.innerHTML = "# 406 after 45 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40604_Band1.png";
  }
  else if(times_406%7 == 5){
    x.innerHTML = "# 406 after 90 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40605_Band1.png";
  }
  else{
    x.innerHTML = "# 406 after 180 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40606_Band1.png";
   }



  times_406++;
}

var times_409 = 1;

function display409(){
  var x = document.getElementById("plotsName409");
  var y = document.getElementById("plots409");
  if(times_409%3 == 0){
    x.innerHTML = "# 409 before irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40900_Band1.png";
  }
  else if(times_409%3 == 1){
    x.innerHTML = "# 409 after 45 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40901_Band1.png";
  }
  else{
    x.innerHTML = "# 409 after 90 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip40902_Band1.png";
   }



  times_409++;
}

var times_410 = 1;

function display410(){
  var x = document.getElementById("plotsName410");
  var y = document.getElementById("plots410");
  if(times_410%3 == 0){
    x.innerHTML = "# 410 before irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41000_Band1.png";
  }
  else if(times_410%3 == 1){
    x.innerHTML = "# 410 after 45 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41001_Band1.png";
  }
  else{
    x.innerHTML = "# 410 after 90 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41002_Band1.png";
   }



  times_410++;
}

var times_411 = 1;

function display411(){
  var x = document.getElementById("plotsName411");
  var y = document.getElementById("plots411");
  if(times_411%3 == 0){
    x.innerHTML = "# 411 before irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41100_Band1.png";
  }
  else if(times_411%3 == 1){
    x.innerHTML = "# 411 after 45 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41101_Band1.png";
  }
  else{
    x.innerHTML = "# 411 after 90 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41102_Band1.png";
   }



  times_411++;
}

var times_412 = 1;

function display412(){
  var x = document.getElementById("plotsName412");
  var y = document.getElementById("plots412");
  if(times_412%3 == 0){
    x.innerHTML = "# 412 before irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41200_Band1.png";
  }
  else if(times_412%3 == 1){
    x.innerHTML = "# 412 after 45 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41201_Band1.png";
  }
  else{
    x.innerHTML = "# 412 after 90 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41202_Band1.png";
   }



  times_412++;
}

var times_413 = 1;

function display413(){
  var x = document.getElementById("plotsName413");
  var y = document.getElementById("plots413");
  if(times_413%3 == 0){
    x.innerHTML = "# 413 before irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41300_Band1.png";
  }
  else if(times_413%3 == 1){
    x.innerHTML = "# 413 after 45 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41301_Band1.png";
  }
  else{
    x.innerHTML = "# 413 after 90 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41302_Band1.png";
   }



  times_413++;
}

var times_414 = 1;

function display414(){
  var x = document.getElementById("plotsName414");
  var y = document.getElementById("plots414");
  if(times_414%3 == 0){
    x.innerHTML = "# 414 before irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41400_Band1.png";
  }
  else if(times_414%3 == 1){
    x.innerHTML = "# 414 after 45 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41401_Band1.png";
  }
  else{
    x.innerHTML = "# 414 after 90 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41402_Band1.png";
   }



  times_414++;
}

var times_415 = 1;

function display415(){
  var x = document.getElementById("plotsName415");
  var y = document.getElementById("plots415");
  if(times_415%3 == 0){
    x.innerHTML = "# 415 before irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41500_Band1.png";
  }
  else if(times_415%3 == 1){
    x.innerHTML = "# 415 after 45 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41501_Band1.png";
  }
  else{
    x.innerHTML = "# 415 after 90 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41502_Band1.png";
   }



  times_415++;
}

var times_417 = 1;

function display417(){
  var x = document.getElementById("plotsName417");
  var y = document.getElementById("plots417");
  if(times_417%3 == 0){
    x.innerHTML = "# 417 before irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41700_Band1.png";
  }
  else if(times_417%3 == 1){
    x.innerHTML = "# 417 after 45 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41701_Band1.png";
  }
  else{
    x.innerHTML = "# 417 after 90 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41702_Band1.png";
   }



  times_417++;
}

var times_418 = 1;

function display418(){
  var x = document.getElementById("plotsName418");
  var y = document.getElementById("plots418");
  if(times_418%3 == 0){
    x.innerHTML = "# 418 before irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41800_Band1.png";
  }
  else if(times_418%3 == 1){
    x.innerHTML = "# 418 after 45 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41801_Band1.png";
  }
  else{
    x.innerHTML = "# 418 after 90 minutes irradiation";
    y.src="figures/LOCx2QA_EYE_Chip41802_Band1.png";
   }



  times_418++;
}
