
//maintenance of control-key-bindings via the controls object
var controls = {sticks: "e",
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
                ride: 'c'};

//function to update key-bindings in controls object
function updateControls() {
  var items = document.querySelectorAll(".item");
  for(var i=0;i<items.length;i++) {
    controls[items[i].id] = items[i].value;
  }
  alert("Controls Updated!");
}

//exports
//export { controls };
