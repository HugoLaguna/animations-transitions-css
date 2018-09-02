var controlSlide = 0;
var controlStep = 0;
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

// function selectSlide(onkey){
//     if ( onkey=='ArrowLeft' || onkey=='ArrowRight' ){
//         if( controlSlide >= 0 ){
//             console.log(`keyup event. key property value is "${onkey}"`);
//             if( onkey=='ArrowLeft' && controlSlide > 0){
//                 controlSlide--; 
//                 reclases('sliders' , 'actived');  
//             }else if(onkey=='ArrowRight' &&  controlSlide < byName('sliders').length-1 ){
//                 controlSlide++;
//                 reclases('sliders' , 'actived');  
//             }
//             byName('sliders')[controlSlide].classList.add('actived');
//         }
//     }
// }

function selectSlide(onkey){
    if ( onkey=='ArrowLeft' || onkey=='ArrowRight' ){
        if( controlSlide >= 0 ){
            console.log(`keyup event. key property value is "${onkey}"`);
            if( onkey=='ArrowLeft' && controlSlide > 0){
                _.ByNames('sliders')[controlSlide].classList.remove('active');
                controlSlide--;
                _.goToElement(_.ByNames('sliders')[controlSlide]);
                _.ByNames('sliders')[controlSlide].classList.add('active');
                _.ByID('examples').setAttribute('pt-state', controlSlide);
                controlStep = 0;
                document.body.setAttribute('step-state', controlStep);
            }else if(onkey=='ArrowRight' &&  controlSlide < _.ByNames('sliders').length-1 ){
                _.ByNames('sliders')[controlSlide].classList.remove('active');
                controlSlide++;
                _.goToElement(_.ByNames('sliders')[controlSlide]);
                _.ByNames('sliders')[controlSlide].classList.add('active');
                _.ByID('examples').setAttribute('pt-state', controlSlide);
                controlStep = 0;
                document.body.setAttribute('step-state', controlStep);
            }
            
        }
    }else if( onkey=='ArrowUp' || onkey=='ArrowDown'){
        if(controlStep < 0){controlStep=0;}
        if( onkey=='ArrowUp' && controlStep > 0){
            controlStep--;
            document.body.setAttribute('step-state', controlStep);
        }else if(onkey=='ArrowDown' && controlStep >= 0){
            controlStep++;
            document.body.setAttribute('step-state', controlStep);
        }
    }
}
function selectSlideLeft(){ selectSlide('ArrowLeft'); }
function selectSlideRight(){ selectSlide('ArrowRight'); }

document.addEventListener('swipeleft', selectSlideRight);
document.addEventListener('swiperight',selectSlideLeft);