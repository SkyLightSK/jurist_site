var vid = document.getElementById("bgvid");
var loader = $('#loader');

vid.addEventListener('ended', function() {
  vid.pause();
});

vid.addEventListener('loadeddata', function() {
  
  loader.animate({opacity: 0}, 300, function() {
    $(this).css({display: 'none'});
  });

  $('.main-page-container').css({animation: 'menu-fade-in 2s forwards ease-in-out', animationDelay: '5s'})
});
