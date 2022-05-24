window.onscroll = function () {
  checkPageHeight();
};

var nameItem = document.getElementById("nameItem");
var navbar = document.getElementById("navbar");
var navItem = document.getElementsByClassName("navItem");
var sticky = navbar.offsetTop;

function checkPageHeight() {
  console.log("Sticky" + ": " + sticky);
  console.log("ScrollY: " + window.screenY);
  if (window.scrollY - 450 >= sticky) {
    navbar.classList.add("sticky");
    nameItem.style.visibility = "visible";
    nameItem.style.color = "black";
    nameItem.style.paddingRight = "570px";

    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "black";
    }
  } else {
    navbar.classList.remove("sticky");
    nameItem.style.visibility = "hidden";
    for (let i = 0; i < navItem.length; i++) {
      navItem[i].style.color = "white";
    }
  }
}
