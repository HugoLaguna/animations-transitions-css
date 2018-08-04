var controlSlide = 0;
document.addEventListener('keyup', (e) => {
    selectSlide(e.key);
  });

function reclases( tagName, className ){
    slides = byName(tagName);
    for( i = 0 ; i < slides.length; i++){
        slides[i].classList.remove(className);
    }
}
function byName(stringName){
    return document.getElementsByName(stringName);
}

function selectSlide(onkey){
    if ( onkey=='ArrowLeft' || onkey=='ArrowRight' ){
        if( controlSlide >= 0 ){
            console.log(`keyup event. key property value is "${onkey}"`);
            if( onkey=='ArrowLeft' && controlSlide > 0){
                controlSlide--; 
                reclases('sliders' , 'actived');  
            }else if(onkey=='ArrowRight' &&  controlSlide < byName('sliders').length-1 ){
                controlSlide++;
                reclases('sliders' , 'actived');  
            }
            byName('sliders')[controlSlide].classList.add('actived');
        }
    }
}
var featured = document.getElementById("keynote");
if( "ontouchstart" in window ) {
    var touchStart = function(evt) {
        var startTime = (new Date()).getTime();
        var startX = evt.changedTouches[0].pageX;
        var touchEnd = function(evt) {
            document.removeEventListener("touchend", touchEnd);
            var diffX = evt.changedTouches[0].pageX - startX;
            var elapsed = (new Date()).getTime() - startTime;
            console.log( "Swiped " + diffX + " pixels in " + elapsed + " milliseconds" );
            if( elapsed < 200 && Math.abs(diffX) > 50 ) {
                ( diffX < 0 ) ? slideright() : slideleft();
            }
        }
        document.addEventListener("touchend", touchEnd);
    };
    featured.addEventListener("touchstart", touchStart);
}
