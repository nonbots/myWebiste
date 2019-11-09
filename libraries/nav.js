function fadeIn() {
  document.getElementById('h1').style.opacity = '1';
}

function fadeOut() {
  document.getElementById('h1').style.opacity = '0';
}

var dialogue = ['Hello,', 'My name is Nhan.', 'Thanks for visiting my place on the Web!'];

function changeText() {
  var timer = 0;
  var fadeOutTimer = 1000;
  for (let i = 0; i < dialogue.length; i++) {
    setTimeout(fadeIn, timer);
    setTimeout(fadeOut, fadeOutTimer);
    setTimeout(function () {
      document.getElementById('h1').innerHTML = dialogue[i];
    }, timer);
    timer = (timer + 3000) * 1;
    fadeOutTimer = (fadeOutTimer + 3000) * 1;
    console.log(timer, fadeOutTimer);
  }
  setTimeout(newUserInput, 9000);
}

function newUserInput() {

  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "textInput");
  input.setAttribute("value", "");
  input.setAttribute("placeholder", "Type then press \"Enter\"");
  input.setAttribute("maxLength", "28");
  input.setAttribute("size", "28");
  var parent = document.getElementById("inputDiv");
  parent.appendChild(input);
  parent.style.borderStyle = 'solid';
  parent.style.width = '50%';
  parent.style.position = 'absolute';
  parent.style.left = '50%';
  parent.style.borderWidth = '0px 0px 0px 0px';
  parent.style.fontSize = '1.5em';

  fadeIn();
  var question = 'How would you like for me to address you?';
  document.getElementById('h1').innerHTML = question;

  function pressEnter() {
    var userName = input.value;
    if (event.keyCode == 13) {
      setTimeout(fadeOut, 0);
      setTimeout(function () {
        parent.style.display = 'none';
      }, 0);
      setTimeout(function () {
        document.getElementById('h1').innerHTML = "Nice to meet you," +
          " " + userName + "!";
      }, 1000);
      setTimeout(fadeIn, 2000);
      setTimeout(function () {

        document.getElementById('newtext').style.display = 'grid';
        document.getElementById('newtext').style.opacity = '1';

      }, 2000);
    }
  }
  input.addEventListener("keyup", pressEnter);
}
changeText();

function NavAnimation() {
  var animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
  var arrow = document.getElementById("arrowUp");
  animate.setAttribute('attributeName', 'd');
  animate.setAttribute('dur', '1s');
  animate.setAttribute('fill', 'freeze');
  animate.setAttribute('values', 'M0 0 L10 10 L20 0; M0 10 L10 0 L20 10');
  arrow.appendChild(animate);
  animate.beginElement();
  document.getElementById('h1').style.display = 'grid';
  document.getElementById('h1').style.opacity = '0';


  setTimeout(function () {
    function myNavHeight() {
      var elem = document.getElementById("absoluteCenterContainer");
      var elemheight = 100;
      var id = setInterval(frame, 0);
      var num = .5;
      var n = num.toFixed(2)

      function frame() {
        if (elemheight == 0) {
          clearInterval(id);
        } else {
          elemheight = elemheight - n;
          elem.style.height = elemheight + '%';
          /*//onclick 
          //if (height is greater than  to 60% ){
            //decrement
            //then stop ate 60$ width }  
          // else 
          //decrement to when width is equal to 0%
          //clear frame interval
                  }
                }
          function frame(){
            if (elemheight>60){
              elemheight--;
              elem.style.height = elemheight + '%';
            }else if(elemheight <60 || elemheight==60 && elemheight>0){
              elemheight--;
              elem.style.height = elemheight + '%';
            }else{
              clearInterval(id);
            }
            still coant find how to end fram at each click*/
        }
      }
    }
    myNavHeight();
    // document.getElementById('newtext').style.display = 'grid';
    // document.getElementById('newtext').style.opacity = '0';;

  }, 1200);

  setTimeout(function () {

    window.location.href = "home.html";


  }, 2500);
}

function NavAnimationHome() {
  var animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
  var arrow = document.getElementById("arrowUp2");
  animate.setAttribute('attributeName', 'd');
  animate.setAttribute('dur', '1s');
  animate.setAttribute('fill', 'freeze');
  animate.setAttribute('values', 'M0 0 L10 10 L20 0; M0 10 L10 0 L20 10');
  arrow.appendChild(animate);
  animate.beginElement();
  document.getElementById('h1a').style.display = 'grid';
  document.getElementById('h1a').style.opacity = '0';

  setTimeout(function () {
    function myNavHeight() {
      var elem = document.getElementById("headerContainerhome");
      var elemheight = 60;
      var id = setInterval(frame, 0);
      var num = .5;
      var n = num.toFixed(2)

      function frame() {
        if (elemheight == 0) {
          clearInterval(id);
        } else {
          elemheight = elemheight - n;
          elem.style.height = elemheight + '%';

        }
      }
    }
    myNavHeight();
    document.getElementById('newtext2').style.display = 'grid';
    document.getElementById('newtext2').style.opacity = '0';


  }, 1200);

  setTimeout(function () {

    window.location.href = "works.html";

  }, 3000);
}