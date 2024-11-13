function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

//THE NUMBER OF PEOPLE ON THE MAP


var numberOfPeople = 17;

for (var i = 1; i < numberOfPeople + 1; i++) {
  // modal
  let j = i;

  //button
  var btn = document.getElementById("person" + i);
  var close = document.getElementById("close" + i);

  //when the user clicks on the button
  btn.onclick = () => personClick(j);
  close.onclick = () => closeClick(j);
}

function personClick(num) {
  var modal = document.getElementById("modal" + num);
  modal.style.display = "block";
}

function closeClick(num) {
  var modal = document.getElementById("modal" + num);
  var video = document.getElementById("video" + num);
  modal.style.display = "none";
  video.pause();
  video.controls.pause();
  video.currentTime = 0;
}

// when the user clicks anywhere outside modal, close setInterval(function () {
window.onclick = function (event) {
  for (var i = 1; i < numberOfPeople + 1; i++) {
    let index = i;
    var modal = document.getElementById("modal" + index);
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};

function playSound() {
          var sound = document.getElementById("audio");
          sound.play();
      }
