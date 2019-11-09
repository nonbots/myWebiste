includeHTML();
filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("worksBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    function Animate1() {
      function myNavHeight() {
        var elem = document.getElementById("headerContainerWork");
        var elemheight = 60;
        var id = setInterval(frame, 0);
        var num = .5;
        var n = num.toFixed(2)

        function frame() {
          if (elemheight == 5) {
            clearInterval(id);
          } else {
            elemheight = elemheight - n;
            elem.style.height = elemheight + '%';

          }
        }
      }
      myNavHeight();
      document.getElementById('worksBtnContainer').style.display = 'none';
      setTimeout(Animate2, 2000);
    }

    function Animate2() {

      document.getElementById('navBarContainer').style.display = 'grid';
    }
    Animate1();

  });
}
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("navBarContainer2").style.display = "grid";
  } else {
    document.getElementById("navBarContainer2").style.display = "none";
  }
}