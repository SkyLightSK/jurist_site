
var vid = document.getElementById("bgvid");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

vid.addEventListener('ended', function()
{
vid.pause();
});
