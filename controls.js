//2 control schemes

const proControls = {
  sticks: 'e',
  closedhh1: 'f',
  closedhh2: 'd',
  openhh: 'r',
  snare1: 'g',
  snare2: 'h',
  rimshot: 'j',
  bass1: 'b',
  bass2: 'v',
  lefttom: 't',
  righttom: 'y',
  floortom: 'u',
  crash: 'm',
  crashnbass: 'n',
  ride: 'c',
};

const easyControls = {
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

//setting up the controls object

var controls = {};

if (localStorage.getItem('controls') === null) {
  controls = {
    sticks: 'e',
    closedhh1: 'f',
    closedhh2: 'd',
    openhh: 'r',
    snare1: 'g',
    snare2: 'h',
    rimshot: 'j',
    bass1: 'b',
    bass2: 'v',
    lefttom: 't',
    righttom: 'y',
    floortom: 'u',
    crash: 'm',
    crashnbass: 'n',
    ride: 'c',
  };
  localStorage.setItem('controls', JSON.stringify(controls));
} else {
  controls = JSON.parse(localStorage.getItem('controls'));
}

//---------------------Utility functions-------------------

//function to update controls displayed on page
function updateDisplayedControls() {
  var items = document.querySelectorAll('.item');
  for (var i = 0; i < items.length; i++) {
    items[i].value = controls[items[i].id];
  }
}

//function to save custom user controls
function saveCustomControls() {
  var items = document.querySelectorAll('.item');
  for (var i = 0; i < items.length; i++) {
    if (items[i].value === null || items[i].value.length !== 1) {
      alert(
        'Error: Invalid control set. A valid drum control must be set to any 1 keyboard key'
      );
      return;
    }
    controls[items[i].id] = items[i].value;
  }
  localStorage.setItem('controls', JSON.stringify(controls));
  alert('Custom Control Scheme updated successfully');
}

//function to choose easy controls scheme
function setEasyControls() {
  controls = easyControls;
  localStorage.setItem('controls', JSON.stringify(controls));
  updateDisplayedControls();
  alert('Easy Control Scheme chosen successfully');
}

//function to choose pro controls scheme
function setProControls() {
  controls = proControls;
  localStorage.setItem('controls', JSON.stringify(controls));
  updateDisplayedControls();
  alert('Pro Control Scheme chosen successfully');
}

updateDisplayedControls();
