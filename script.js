window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if (!audio) return; // stop funtion from running all together
    audio.currentTime = 0; //rewind to the beginning
    audio.play();
    console.log(key);
    key.classList.add('playing');

});