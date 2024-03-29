function openWorkout(evt, workoutName) {
  // Declare all variables
  var i, firsttabcontent, firsttablinks;

  // Get all elements with class="firsttabcontent" and hide them
  firsttabcontent = document.getElementsByClassName("firsttabcontent");
  for (i = 0; i < firsttabcontent.length; i++) {
    firsttabcontent[i].style.display = "none";
  }

  // Get all elements with class="firsttabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="firsttablinks" and remove the class "active"
  firsttablinks = document.getElementsByClassName("firsttablinks");
  for (i = 0; i < firsttablinks.length; i++) {
    firsttablinks[i].className = firsttablinks[i].className.replace(" active", "");
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(workoutName).style.display = "block";
  evt.currentTarget.className += " active";

}


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

  }
  