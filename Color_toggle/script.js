function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  /*------ Menu click function ------*/
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {      
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

  function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor=b;
  }
