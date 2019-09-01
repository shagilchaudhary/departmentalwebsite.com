// The sounds used are borrowed from https://github.audio
// Check it out, it's a really nice project

window.onload = function() {
  var context = new AudioContext();

var sounds = [],
    total_sounds = 51,
    all_loaded = false;

  var loaded_sounds = 0;
  var sound_load = function(r) {
      loaded_sounds += 1;
      if (loaded_sounds == total_sounds) {
          all_loaded = true;
      }
  }
  
// Load sounds
  for (var i = 1; i <= 24; i++) {
      if (i > 9) {
          fn = 'c0' + i;
      } else {
          fn = 'c00' + i;
      }
      sounds.push(new Howl({
          src : ['https://d1fz9d31zqor6x.cloudfront.net/sounds/celesta/' + fn + '.ogg',
                  'https://d1fz9d31zqor6x.cloudfront.net/sounds/celesta/' + fn + '.mp3'],
          volume : 0.7,
          onload : sound_load(),
          buffer: true,
      }))
      sounds.push(new Howl({
          src : ['https://d1fz9d31zqor6x.cloudfront.net/sounds/clav/' + fn + '.ogg',
                  'https://d1fz9d31zqor6x.cloudfront.net/sounds/clav/' + fn + '.mp3'],
          volume : 0.4,
          onload : sound_load(),
          buffer: true,
      }))
  }

  for (var i = 1; i <= 3; i++) {
      sounds.push(new Howl({
          src : ['https://d1fz9d31zqor6x.cloudfront.net/sounds/swells/swell' + i + '.ogg',
                  'https://d1fz9d31zqor6x.cloudfront.net/sounds/swells/swell' + i + '.mp3'],
          volume : 1,
          onload : sound_load(),
          buffer: true,
      }));
  }
/**
* Randomly selects a sound and plays it
*/
function playRandomSound() {
    var index = Math.round(Math.random() * (sounds.length - 1));
    sounds[index].play();
}
  
var body = document.querySelector('body');
var currentTarget = null;
body.addEventListener('mouseover', function(e){
    if (e.target !== currentTarget) {
      currentTarget = e.target;
      if(all_loaded){
        playRandomSound();
      }
    }
    e.stopPropagation();
  })
  
bgCover = document.querySelector('.bg-cover');  
document.querySelector('.start').addEventListener('click', function() {
  context.resume().then(() => {
    bgCover.setAttribute("style", "display:none;");
    console.log('Playback started successfully');
  });
});
}