function playAudio() {
    var audio = document.getElementById("myAudio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0; // Optional: Reset the audio to the start if paused
    }
}