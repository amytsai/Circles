
//flat ui colors
var TURQUOISE = "#1abc9c";
var EMERALD = "#2ecc71";
var RIVER = "#3498db";
var AMATHYST = "#9b59b6";
var SUNFLOWER = "#f1c40f";
var CARROT = "#e67e22";
var ALIZARIN = "#e74c3c";


function randomize_circles() {
  /*var circles = document.getElementById("circle container").getElementsByClassName("circle");*/

  $('.circle').each(function() {
    var randcolor = generateRandomColor();
    var randtime = generateRandomTime();
    var randdelay = generateRandomDelay()
    //console.log(randcolor);
    $(this).addClass('circleflip');
    $(this).css('animation', 'circleflip ' + randtime + ' ease-out ' + randdelay);
    $(this).css('-webkit-animation','circleflip ' + randtime + ' ease-out ' + randdelay);
    $(this).css('animation-play-state', 'running');
    $(this).css('-webkit-animation-play-state', 'running');
    $(this).css('background-color', randcolor);
  });

  $('.circle').each(function() {
    var el     = $(this),  
    newone = el.clone(true);
    el.before(newone);
    $(this).remove();
  });


}

function generateRandomColor() {
  var num = Math.random();
  if (num < .143){
    return TURQUOISE;
  }
  else if (num > .143 && num < .286){
    return EMERALD;
  }
  else if (num > .286 && num < .429){
    return RIVER;
  }
  else if (num > .429 && num < .572){
    return AMATHYST;
  }
  else if (num > .572 && num < .715){
    return SUNFLOWER;
  }
  else if (num > .715 && num < .858){
    return CARROT;
  }
  else {
    return ALIZARIN;
  }
}

function generateRandomTime() {
  var num = Math.round(Math.random() * 10) / 20;
  num += .3;
  return num + 's';
}

function generateRandomDelay() {
  var num = Math.round(Math.random() * 10) / 30;
  return num + 's';
}

$(document).ready(function(){
  $('.circle').each(function() {
    var col = generateRandomColor();
    $(this).css('background-color', col);
  })
});
