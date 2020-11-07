// @ts-check //debug工具，但還需要再安裝一些東西: https://medium.com/html-test/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B-%E4%BD%BF%E7%94%A8npm%E5%A5%97%E4%BB%B6-317beefdf182
function myFun() {
  alert("測試文字 myFun");
}


function separate(lines) {
  var part0 = "";
  var part1 = "";
  for (var i = 0; i < lines.length; i++) {
    if (i%2 === 0) {
      part0 += (Math.floor(i/2)+1) +". "+ lines[i]+"\n";
    }
    else {
      part1 += (Math.floor(i/2)+1) +". "+ lines[i]+"\n";
    }
  }
  return [part0, part1];
}

$(function () {
  $("button.split").click(function(){
    var text = $('textarea').val();

    
    var lines = [];
    $.each($('textarea').val().split(/\n/), function(i, line){
        if(line!=""){
            lines.push(line);
        }
    });


    console.log(lines);

    var values = separate(lines)

    $('#english').val(values[0]);
    $('#chinese').val(values[1]);


    // alert("click button");

  });

});
