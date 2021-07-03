var randomNumber=Math.floor(Math.random()*6)+1;
var randomeDiceimage="dice"+ randomNumber+".png";
var randomImageSource="images/"+ randomeDiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomeDiceimage="dice"+ randomNumber2+".png";
var randomImageSource="images/"+ randomeDiceimage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!!!";
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!!!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}
