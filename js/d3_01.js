var svgctrl = d3.select('svg');
var c2 = svgctrl.append('circle');
c2.attr('cx', 300).attr('cy', 100).attr('r', 10).attr('stroke-width', 3).attr('fill', 'red');

function move() {
    var svgctrl = d3.select('svg');
    var c3 = svgctrl.append('circle');
    var x = $("#input_x").val();
    var y = $("#input_y").val(); //注意編碼怎麽寫 
    c3.attr('cx', x).attr('cy', y).attr('r', 10).attr('stroke-width', 3).attr('fill', 'red');
}

$("#001").bind('click', move);