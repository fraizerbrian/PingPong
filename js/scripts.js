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
    $("form#pingpong").submit(function(event) {
        event.preventDefault();
        var number = parseInt($("#input1").val());
        var result = numbers(number);
        // $("#result").text(result);
        //numbers.forEach(function(number) {
        $("#result").append("<li>" + number + "</li>");      
        //});
    });
 });
     var numbers = function(number) {
            if((number % 3 ===0) && (number % 5 === 0)) {
                 return "pingpong";
            }
            else if ((number%5)===0) {
                return "pong";
            }
             else if ((number % 3) === 0) {
                 return "ping";
            
            }
            else {
                return number;
            }
    };