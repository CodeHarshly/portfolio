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
});

function enableLightMode() {
  document.body.classList.add("light-mode");
  localStorage.setItem("lightMode", "1");
}

function disableLightMode() {
  document.body.classList.remove("light-mode");
  localStorage.setItem("lightMode", "0");
}
