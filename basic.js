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
function selectSlideLeft(){ selectSlide('ArrowLeft'); }
function selectSlideRight(){ selectSlide('ArrowRight'); }

document.addEventListener('swipeleft', selectSlideRight);
document.addEventListener('swiperight',selectSlideLeft);