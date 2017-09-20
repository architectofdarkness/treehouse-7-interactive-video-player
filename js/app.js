const video = document.querySelector('video');
const transcriptDiv = document.querySelector('.transcript');

// Highlight Transcript based on time-stamps
video.addEventListener('timeupdate', () => {
  sentences = document.querySelectorAll('.transcript span');
  currentTime = video.currentTime;
  
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    
    if (sentence.nextElementSibling) {
      const nextSentence = sentences[i].nextElementSibling;
      const sentenceEnd = parseFloat(nextSentence.getAttribute('data-time'));
      let sentenceStart = parseFloat(sentence.getAttribute('data-time'));

      if (sentenceStart <= currentTime && currentTime < sentenceEnd) {
        sentence.className = "highlight";
      } else {
        sentence.className = "";
      }
    }
  }
});

// Set currentTime of video based on user clicks on transcript sentences
transcriptDiv.addEventListener('click', (e) => {
  let sentence = e.target;
  let time = parseFloat(sentence.getAttribute('data-time'));
  
  video.currentTime = time;
  video.play();
});