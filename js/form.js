$(document).ready(function() {
    drawGraph();
});

$('form').submit(function() {
    var formArr = $('form').serializeArray();
    console.log(formArr);
    return false;
});

function drawGraph()
{
    $('.graph').append('<canvas id="graphRadar" width="500" height="500" style="border:1px solid #d3d3d3;"></canvas>');
    var cir = document.getElementById("graphRadar");
    var ctx = cir.getContext("2d");
    // Don't need to draw the circle for now.
    //ctx.arc(250,250,250,0,2*Math.PI);
    ctx.moveTo(250,0);
    ctx.lineTo(250,500);
    ctx.moveTo(0,250);
    ctx.lineTo(500,250);
    ctx.stroke();
    ctx.font = "20px Arial";
    ctx.fillText("Josefin Sans",30,30);
    ctx.font = "20px Garamond";
    ctx.fillText("Berkshire Swash",330,30);
    ctx.fillText("Old Standard TT",30,480);
    ctx.fillText("Kaushan Script",330,480);
}

