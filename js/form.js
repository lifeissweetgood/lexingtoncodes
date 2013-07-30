// Global counts per font
var JS_cnt;
var BS_cnt;
var OST_cnt;
var KS_cnt;

// Position of font counts on graph
var JS_Xcoord = 110;
var JS_Ycoord = 150;
var BS_Xcoord = 360;
var BS_Ycoord = 150;
var OST_Xcoord = 110;
var OST_Ycoord = 375;
var KS_Xcoord = 360;
var KS_Ycoord = 375;


$(document).ready(function() {
    JS_cnt = 0;
    BS_cnt = 0;
    OST_cnt = 0;
    KS_cnt = 0;

    // Add graph to DOM
    $('.graph').append('<canvas id="graphRadar" width="500" height="500" style="border:1px solid #d3d3d3;"></canvas>');

    // Draw initial graph
    drawGraph();
    updateCounts(JS_cnt, JS_Xcoord, JS_Ycoord);
    updateCounts(BS_cnt, BS_Xcoord, BS_Ycoord);
    updateCounts(OST_cnt, OST_Xcoord, OST_Ycoord);
    updateCounts(KS_cnt, KS_Xcoord, KS_Ycoord);
});

$('form').submit(function() {
    /* TODO:
     *  Take in the data passed in from the form
     *  and parse it.  Find which font the user selected
     *  and increase the global count of that font (*_cnt variable).
     *  Then update the graph to reflect that new count.
     */

    /* ADD YOUR CODE HERE */

    return false;
});

function drawGraph()
{
    var cir = document.getElementById("graphRadar");
    var ctx = cir.getContext("2d");

    ctx.moveTo(250,0);
    ctx.lineTo(250,500);
    ctx.moveTo(0,250);
    ctx.lineTo(500,250);
    ctx.stroke();

    ctx.font = "20px Arial";
    ctx.fillText("Josefin Sans",30,30);
    ctx.fillText("Berkshire Swash",330,30);
    ctx.fillText("Old Standard TT",30,480);
    ctx.fillText("Kaushan Script",330,480);
}

function updateCounts(fontText, countX, countY)
{
    var cir = document.getElementById("graphRadar");
    var ctx = cir.getContext("2d");
    ctx.font = "60px Arial";
    ctx.fillText(fontText, countX, countY);
}

function clearGraph()
{
    var cir = document.getElementById("graphRadar");
    var ctx = cir.getContext("2d");
    ctx.clearRect(0,0,500,500);
}
