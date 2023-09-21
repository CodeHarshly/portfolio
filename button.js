document.addEventListener("DOMContentLoaded", function() {
  var toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("change", function() {
    if (toggleButton.checked) {
      enableLightMode();
    } else {
      disableLightMode();
    }
  });

  // Check the initial state of light mode
  var isLightMode = localStorage.getItem("lightMode");
  
  if (isLightMode === "1") {
    toggleButton.checked = true;
    enableLightMode();
    
  } else {
    toggleButton.checked = false;
    disableLightMode();
    
  }
  /*if(document.body.classList.contains("light-mode")){
    
  }
  else {*/
    
});

function enableLightMode() {
  var imageid1 = document.getElementById("imageid1");
  var imageid2 = document.getElementById("imageid2");
  document.body.classList.add("light-mode");
  localStorage.setItem("lightMode", "1");
  imageid1.src ="images/homep2.png";
  imageid2.src ="images/aboutp2.png";
}

function disableLightMode() {
  var imageid1 = document.getElementById("imageid1");
  var imageid2 = document.getElementById("imageid2");
  document.body.classList.remove("light-mode");
  localStorage.setItem("lightMode", "0");
  imageid1.src ="images/homep1.png";
  imageid2.src ="images/aboutp1.png";
  
}
