var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;
var image1="dice images/dice"+ a +".png";
var image2="dice images/dice"+ b +".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(a>b)
{
    document.querySelector("h1").innerHTML="PLayer1 wins 🥇";
}
else if(a<b)
{
    document.querySelector("h1").innerHTML="PLayer2 wins 🥇";
}
else
{
    document.querySelector("h1").innerHTML="Match Draw!";
}