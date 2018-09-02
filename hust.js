//Objeto Global de funciones
var _        = new Object();
let callback = new Function();
var scroller = 0;

_ = { 
    ByID : function(idElement){ 
        // reducir el selector por ID
        return document.getElementById(idElement); 
        },

    ByNames : function(idElement){ 
        // reducir el selector por ID
        return document.getElementsByName(idElement); 
        },

    global : function(){
        return document;
        },

    reClass : function(elementDOM,className){
        // Detecta y agrega o quita clase 
        if(elementDOM.classList.contains(className)){
            elementDOM.classList.remove(className);
            return false;
        }else{
            elementDOM.classList.add(className);
            return true;
        }},
    
    betwClass : function(elementDOM,classNameOne,classNameTwo){
        // Detecta y cambia una clase por otra en un elemento
        if(elementDOM.classList.contains(classNameOne)){
            elementDOM.classList.remove(classNameOne);
            elementDOM.classList.add(classNameTwo);
        }else{
            elementDOM.classList.remove(classNameTwo);
            elementDOM.classList.add(classNameOne);
        }},
    
    setClass : function(elementDOM,classNameOne,classNameTwo){
        // Define estricamente la clase que se agrega y la que se debe quitar
        elementDOM.classList.add(classNameOne);
        if ( classNameTwo !== undefined ) elementDOM.classList.remove(classNameTwo);
        },

    FormatMoney : function(integerValue) {
        // Formatea por millares *3 un numero o cadena
        var num = integerValue.toString(); num = num.replace(/\./g, '');
        if (!isNaN(num)) {
            num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
            num = num.split('').reverse().join('').replace(/^[\.]/, ''); 
            return num;
        }},

    goToID : function(idElement){
        // traslado suave hacia un elemento por ID
        document.getElementById(idElement).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        },

    goToElement : function(elementDOM){
        // traslado suave hacia un elemento directo
        elementDOM.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        },

    eachFor : function( arrayUser ,  callback ){
        // Bucle dinamico corto
        if( arrayUser === undefined || arrayUser.length <= 0 ){
            return false;
        }else{
            for( x = 0 ; x < arrayUser.length ; x++ ){
                callback(arrayUser[x]) ;
            }
            return true;
        }},

    Ajax : function( EndPoint , Synchro , MethodREST , Content ){
        // basic ajax connection
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                return this.responseText;
            }
        }
        if(MethodREST == 'GET'){
            xhttp.open(MethodREST, EndPoint, Synchro);
            xhttp.send();
        }else if(MethodREST == 'POST'){
            xhttp.open(MethodREST, EndPoint, Synchro);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(Content);
        }else{
            return false;
        }},

    Scroll : {
    // conjunto de methodos especificos para el scroll

        Event : function(ElementDOM, callback){
            // agregar evento basico 'scroll' por codigo corto
            ElementDOM.addEventListener("scroll", callback);
        },

        EventDir : function(ElementDOM){
            // devuelve verdadero si el scroll es positivo o al contrario
            pixel = ElementDOM.scrollTop;
            if (scroller < pixel) {
                scroller = pixel;
                return true
            } else {
                scroller = pixel;
                return false;
            }
        },

        Outs : function(ElementDOM , ElementsDOMs , EventDir , className){
            // detecta la entrada en pantalla de un elemento de un grupo hijos de un padre con evento scroll para crear animaciones de entrada o salida
            pixel  = ElementDOM.scrollTop + 300;
            caps   = ElementsDOMs;
            size   = 0;
            for (var x = 0; x < caps.length; x++) {
                if (EventDir){
                    if (size < pixel && !caps[x].classList.contains(className)){
                        caps[x].classList.add(className);
                        break;
                    }
                }else{
                    if (size > pixel && caps[x].classList.contains(className)){
                        caps[x].classList.remove(className);
                        break;
                    }
                }
                size = size + caps[x].clientHeight;
            }
        },

        nextOuts : function( ElementDOM , ElementsDOMs , className){
            Capitulos = ElementsDOMs;
            for (x = 0 ; x < Capitulos.length; x++) {
                cap = Capitulos[x];
                if (!cap.classList.contains(className)){
                        _.goToElement(cap);
                        cap.classList.add(className);
                        return true;
                        break;
                    }
                y = x + 1;
                if (y == Capitulos.length){
                    _.goToElement(Capitulos[0]);
                }
            }
        },

        Percent : function(ElementDOM){
            Capitulos = ElementDOM.children;
            parent = 0;
            for (cap = 0; cap < Capitulos.length; cap++) {
                parent = parent + Capitulos[cap].clientHeight;
            }
            factor = parent / 100;
            estate = Math.round(pixel / factor);
            return estate;
            
        }}, 

    getEvents : function(ElementDOM , eventDOM , callback){
        // agregar evento basico personalizado por codigo corto
            ElementDOM.addEventListener(eventDOM , callback);
        }     
    };
