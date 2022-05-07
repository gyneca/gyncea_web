function myFunction() {
    var x = document.getElementById("nav");
    var mobile_title = document.getElementById("mobile-title-icon")
    if (x.className == "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }