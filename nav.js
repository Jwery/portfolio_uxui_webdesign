document.querySelector('header button').addEventListener('click', function() {
  document.querySelector('header nav').classList.toggle('open');
  document.querySelector('header button').classList.toggle('is-active');
});
// scrollY
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if(window.scrollY > 100) {
        document.querySelector('footer button').style.display = 'block';
    } else {
        document.querySelector('footer button').style.display = 'none';
    }
});
// scroll to top
document.querySelector('footer button').addEventListener('click', function() {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    );
});
// Mouse coordinates
window.addEventListener('mousemove', function(event) {
    //console.log(event.clientX, event.clientY);
    document.querySelector('#mouseCoordinates').innerHTML = event.clientX + ' ' + event.clientY;
});
// keyboard keydown
window.addEventListener('keydown', function(event) {
    //console.log(event.key);
    document.querySelector('#keyboard').innerHTML = event.key;
});