window.onscroll = function() { 
    var elmnt = document.getElementById("mainTextContainer").clientHeight;
    if (window.scrollY > elmnt) {
      changeNavStyle(true);
    }else{
      changeNavStyle(false);
    }
  }

  function changeNavStyle(aboveSection){
    let menu = document.getElementById("navbar");
    let logo = document.getElementById("logo");
    let navbar = document.getElementById("navbar-list");

      if (aboveSection == true) {
        menu.style["background-color"] = "rgb(	36, 53, 69,.8)";
        menu.style["backdrop-filter"] = "blur(20px)";
        menu.style["height"] = "16vh";
        logo.style["width"] = "70px";
        logo.style["height"] = "80px";
        logo.style["margin-bottom"] = "1.5em";
        navbar.style["margin-bottom"] = "1.5em";
      }else{
        menu.style["background-color"] = null;
        menu.style["backdrop-filter"] = null;
        menu.style["height"] = "20vh";
        logo.style["width"] = "90px";
        logo.style["height"] = "100px";
        logo.style["margin-bottom"] = null;
        navbar.style["margin-bottom"] = null;
      }
  }