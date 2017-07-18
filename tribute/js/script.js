window.onload = function start() {
    slideShow();
}

// Infinite Loops to continuously change pictures
function slideShow () {
  var cycles = 7, containers = 14;
  for (currentCycle = 0; currentCycle < cycles; currentCycle++) {
    console.log(currentCycle);
    for (currentContainer = 1; currentContainer <= containers; currentContainer++) {
      console.log(currentContainer);
      window.setInterval(function () {
        var id = 'container-' + currentContainer;
        var imgNumstr = currentCycle * containers + currentContainer;
        var imgName = 'img/' + imgNumstr + '.jpg';
        console.log('ID = ' + id);
        console.log('ImageName = ' + imgName);
        document.getElementById(id).setAttribute('src', imgName);
      }, 3000); // repeat forever, changing image name every 3 seconds
    }
  }
}

create 14 timer functions create delay between each. then combine

var containerCurImage = [29, 85, 22, 8, 64, 50, 15, 92, 1, 78, 36, 71, 43, 57];
var containerMinImage = [29, 85, 22, 8, 64, 50, 15, 92, 1, 78, 36, 71, 43, 57];
var containerMaxImage = [35, 91, 28, 14, 70, 56, 22, 98, 7, 84, 42, 77, 49, 63];
var containerCount = 14;

function containerCurImageInterate () {
  if (containerCurImage[0] + 6 <= containerMaxImage[0]) {
    for (i = 0; i < containerCount; i++)
    containerCurImage[index] += 6;
  } else {
    containerCurImage[index] = containerMinImage[index];
  }
}

// Infinite Loops to continuously change pictures
function slideShow () {
  var id, imgNumStr, imgName;
  while (currentCycle < totalCycles) {
    setTimeout(function(){
      while (currentContainer <= totalContainers) {
        id = 'container-' + currentContainer;
        imgNumstr = currentCycle * containers + currentContainer;
        imgName = 'img/' + imgNumstr + '.jpg';



    }, 300);



    }
  }

  for (currentCycle = 0; currentCycle < cycles; currentCycle++) {
    console.log(currentCycle);
    for (currentContainer = 1; currentContainer <= containers; currentContainer++) {
      console.log(currentContainer);
      window.setInterval(function () {
        var id = 'container-' + currentContainer;
        var imgNumstr = currentCycle * containers + currentContainer;
        var imgName = 'img/' + imgNumstr + '.jpg';
        console.log('ID = ' + id);
        console.log('ImageName = ' + imgName);
        document.getElementById(id).setAttribute('src', imgName);
      }, 3000); // repeat forever, changing image name every 3 seconds
    }
  }
}


/*

function slide() {
    var num = 0, style = document.getElementById('container').style;
    window.setInterval(function () {
        // increase by num 1, reset to 0 at 4
        num = (num + 1) % 4;

        // -600 * 1 = -600, -600 * 2 = -1200, etc
        style.marginLeft = (-600 * num) + "px";
    }, 3000); // repeat forever, polling every 3 seconds
}

*/
