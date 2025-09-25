const keys = document.querySelector('.keys');
const key = document.querySelector('.key');

 document.addEventListener('keydown', function(e){
 console.log(e);
 const matchingAudio = document.querySelector(`audio[data-key= "${e.key}"]`);
 const matchingVisual  = document.querySelector(`.key[data-key= "${e.key}"]`);
 if(matchingAudio && matchingVisual){
    matchingAudio.play();
    matchingVisual.classList.add('playing');
    setTimeout(() => {
        matchingVisual.classList.remove('playing');
    }, 70);
 }
 });
 