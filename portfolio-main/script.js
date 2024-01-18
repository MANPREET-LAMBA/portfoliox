const main= document.querySelector("#main");
var cur= document.querySelector("#corsur");


main.addEventListener("mousemove", function(dets){
cur.style.left = (dets.x +6)+"px"
cur.style.top = (dets.y +8) +"px"

})


const area= document.querySelector("#effects");
area.addEventListener("mouseenter", function()
{
    cur.style.backgroundImage = "url(effect.jpg)";
    cur.style.width = "150px"
    cur.style.height= "150px"
})
area.addEventListener("mouseleave", function()
{
    cur.style.backgroundImage = "url(black.jpg)";
    cur.style.width = "10px"
    cur.style.height= "10px"
})

