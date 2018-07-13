consoleText(["Welcome.", "Lets Play", "PingPong"], "text", [
    "#20E79E",
    "#20E7CE",
    "aqua"
  ]);
  
  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ["#fff"];
    var visible = true;
    var con = document.getElementById("console");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function() {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function() {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function() {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    window.setInterval(function() {
      if (visible === true) {
        con.className = "console-underscore hidden";
        visible = false;
      } else {
        con.className = "console-underscore";
  
        visible = true;
      }
    }, 400);
  }
  
  $(document).ready(function() {
    $("form").click(function(event) {
        event.preventDefault();
        var userInput=$("#input1").val();
        var input= parseInt(userInput);
        me(input);
        webs.forEach(function(web){
            $("#result").append("<li>" +web +"</li>");
            });
    });
});

var webs=[];
var index;
function me(y){
    for(index=1; index<= y; index++){
        if (index % 15 ===0){
            webs.push("Ping-Pong");
        }
        else if (index % 3 === 0){
            webs.push("Ping");
        }
        else if (index % 5 === 0){
            webs.push("Pong");
        }
        else{
            webs.push(index);
        }
    }
}
