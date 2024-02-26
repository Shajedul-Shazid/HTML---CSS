function toggleFunction() {
    var x = document.querySelector(".navbar-right");
    if (x.style.left === "-373px") {
      x.style.left = "0px";
      x.style.transition = "1s";
      x.style.visiblity = "visible";
    } else {
      x.style.left = "-373px";
      x.style.visiblity = "hidden";
      x.style.transition = "intitial";
    }
  }
  function closeBtn() {
   document.querySelector(".navbar-right").style.visiblity = "hidden";
   document.querySelector(".navbar-right").style.left = "-373px";
   document.querySelector(".navbar-right").style.transition = "intitial";
   
  }
