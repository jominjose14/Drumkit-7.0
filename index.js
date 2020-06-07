//Fetching controls
var controls = {};

if (localStorage.getItem('controls') === null) {
  controls = {
    sticks: 'q',
    closedhh1: '1',
    closedhh2: 'w',
    openhh: '2',
    snare1: '3',
    snare2: 'e',
    rimshot: '4',
    bass1: '5',
    bass2: 'r',
    lefttom: '8',
    righttom: '9',
    floortom: '0',
    crash: '6',
    crashnbass: 't',
    ride: '7',
  };
  localStorage.setItem('controls', JSON.stringify(controls));
} else {
  controls = JSON.parse(localStorage.getItem('controls'));
}

//-------------------------Uitility Functions---------------------------

//setting up array of buttons
var buttonArray = document.querySelectorAll('.drum');

//blink-animation
function blink(button) {
  button.classList.add('clicked');
  setTimeout(function () {
    button.classList.remove('clicked');
  }, 100);
}

//play an audio
function playAudio(fileName) {
  var audio = new Audio('./sounds/' + fileName + '.mp3');
  audio.play();
}

//-------------------DOM setup and Button Listeners for clicks------------------

for (var i = 0; i < buttonArray.length; i++) {
  //filling innerHTML of each button with corresponding control key
  buttonArray[i].innerHTML = controls[buttonArray[i].id];

  //click-listeners for all buttons
  buttonArray[i].addEventListener('click', function () {
    //get clicked button's reference
    var clickedButton = this;
    //play audio
    if (clickedButton.id === 'crashnbass') {
      playAudio('crash');
      playAudio('bass1');
    } else {
      playAudio(clickedButton.id);
    }
    //blink the button
    blink(clickedButton);
  });
}

//-----------------------Document Listeners for keypresses----------------------

//sticks listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.sticks) {
    //play audio
    playAudio('sticks');
    //get button corresponding to the key pressed
    var button = document.getElementById('sticks');
    //blink the button
    blink(button);
  }
});

//closedhh1 listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.closedhh1) {
    //play audio
    playAudio('closedhh1');
    //get button corresponding to the key pressed
    var button = document.getElementById('closedhh1');
    //blink the button
    blink(button);
  }
});

//closedhh2 listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.closedhh2) {
    //play audio
    playAudio('closedhh2');
    //get button corresponding to the key pressed
    var button = document.getElementById('closedhh2');
    //blink the button
    blink(button);
  }
});

//openhh listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.openhh) {
    //play audio
    playAudio('openhh');
    //get button corresponding to the key pressed
    var button = document.getElementById('openhh');
    //blink the button
    blink(button);
  }
});

//snare1 listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.snare1) {
    //play audio
    playAudio('snare1');
    //get button corresponding to the key pressed
    var button = document.getElementById('snare1');
    //blink the button
    blink(button);
  }
});

//snare2 listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.snare2) {
    //play audio
    playAudio('snare2');
    //get button corresponding to the key pressed
    var button = document.getElementById('snare2');
    //blink the button
    blink(button);
  }
});

//rimshot listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.rimshot) {
    //play audio
    playAudio('rimshot');
    //get button corresponding to the key pressed
    var button = document.getElementById('rimshot');
    //blink the button
    blink(button);
  }
});

//bass1 listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.bass1) {
    //play audio
    playAudio('bass1');
    //get button corresponding to the key pressed
    var button = document.getElementById('bass1');
    //blink the button
    blink(button);
  }
});

//bass2 listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.bass2) {
    //play audio
    playAudio('bass2');
    //get button corresponding to the key pressed
    var button = document.getElementById('bass2');
    //blink the button
    blink(button);
  }
});

//lefttom listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.lefttom) {
    //play audio
    playAudio('lefttom');
    //get button corresponding to the key pressed
    var button = document.getElementById('lefttom');
    //blink the button
    blink(button);
  }
});

//righttom listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.righttom) {
    //play audio
    playAudio('righttom');
    //get button corresponding to the key pressed
    var button = document.getElementById('righttom');
    //blink the button
    blink(button);
  }
});

//floortom listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.floortom) {
    //play audio
    playAudio('floortom');
    //get button corresponding to the key pressed
    var button = document.getElementById('floortom');
    //blink the button
    blink(button);
  }
});

//crash listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.crash) {
    //play audio
    playAudio('crash');
    //get button corresponding to the key pressed
    var button = document.getElementById('crash');
    //blink the button
    blink(button);
  }
});

//crashnbass listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.crashnbass) {
    //play audio
    playAudio('crash');
    playAudio('bass1');
    //get button corresponding to the key pressed
    var button = document.getElementById('crashnbass');
    //blink the button
    blink(button);
  }
});

//ride listener
document.addEventListener('keypress', function (e) {
  if (e.key === controls.ride) {
    //play audio
    playAudio('ride');
    //get button corresponding to the key pressed
    var button = document.getElementById('ride');
    //blink the button
    blink(button);
  }
});

//----------------------------end----------------------------
