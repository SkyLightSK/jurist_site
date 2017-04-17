
var vid = document.getElementById("bgvid");

vid.addEventListener('ended', function()
{
vid.pause();
});

var interval = setInterval(checkTime, 1000);
  function checkTime(){
  if(Math.floor(vid.currentTime) > 7){
    // var word = document.getElementById("words");
    // if (word.style.display === 'none') {
    //     word.style.display = 'block';
    // } else {
    //     word.style.display = 'none';
    // }
    alert("7 second");
    clearInterval(interval);
  }
}
