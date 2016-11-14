var svgctrl = d3.select('svg');
var c1 = svgctrl.append('circle');
c1.attr('cx', 300).attr('cy', 100).attr('r', 10).attr('stroke-width', 3).attr('fill', 'red');

function move() {
    var svgctrl = d3.select('svg');
    var c2 = svgctrl.append('circle');
    // var x1 = Math.floor(Math.random() * 400);
    // var y1 = Math.floor(Math.random() * 400);
    // $('#input').text(x1);
    // $('#input').text(y1);

    var x = $("#output_x").text();
    var y = $("#output_y").text(); //注意編碼怎麽寫 
    c2.attr('cx', x).attr('cy', y).attr('r', 10).attr('stroke-width', 3).attr('fill', 'red');
}

function movex() {
    var x1 = Math.floor(Math.random() * 15)*22+160;
    $('#output_x').text(x1);

}
function movey() {
    var y1 = Math.floor(Math.random() * 10)*16+110;
    $('#output_y').text(y1);

}
$("#001").bind('click', movex);
$("#002").bind('click', movey);
$("#003").bind('click', move);