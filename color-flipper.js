color=document.getElementById("values");
function rgb(){
    var x= Math.floor(Math.random() * 256);
    var y= Math.floor(Math.random() * 256);
    var z= Math.floor(Math.random() * 256);

    var rgbColor= "rgb("+ x + ',' + y + ','+ z + ")";
    color.textContent= "Background Color: " + rgbColor;
    document.body.style.backgroundColor= rgbColor;
}