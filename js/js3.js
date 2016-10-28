function sayhello(){
    var str =$("#input").val();
    $("#output").text(str);

}
$("#text").bind('click',sayhello);