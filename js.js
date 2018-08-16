/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give the <body> element a background of */
var getbodyTag = document.getElementsByTagName("body");
getbodyTag[0].style.backgroundColor="#bdc3c7";
/* Make the <h1> element #9b59b6*/
var h1Tag = document.querySelector("h1");
h1Tag.style.color="#9b59b6";
/* Make all <h2> elements orange */
var h2Tag = document.getElementsByTagName("h2");
for (var x=0; x<h2Tag.length; x++){
    h2Tag[x].style.color="orange"
}

/* Make all <li> elements blue(pick your own hexadecimal blue)*/
var liTag = document.getElementsByTagName("li");
liTag[0].style.color="#1144ff";

/*Change the background on every paragraph to be yellow*/
var pTag = document.querySelectorAll("p");
for (var i=0; i <pTag.length;  i++) {
    pTag[i].style.backgroundColor="yellow";
}



/*Make all inputs have a 3px red border*/
var inputTag =document.getElementsByTagName("input");
for (g=0 ; g < inputTag.length; g++){
    inputTag[g].style.border = "3px solid red";
}

/* Give everything with the class 'hello' a white background*/
var classHello = document.getElementsByClassName("hello");
for (c=0 ; c < classHello.length;  c++){
    classHello.style.backgroundColor= "white"
}

/* Give the element with id 'special' a 2px solid blue border(pick your own rgb blue)*/
var special = document.getElementById("special");
special.style.border="2px solid blue border";

/*Make all the <p>'s that are nested inside of divs 25px font(font-size: 25px)*/
