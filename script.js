function toggleAttribute() {
  var htmlElement = document.documentElement; // Reference to <html> element
  var attributeName = "data-bs-theme"; // Attribute name
  var attributeValue = "dark"; // Attribute value

  // Check if HTML element already has the attribute
  if (htmlElement.getAttribute(attributeName)) {
    // If attribute exists, remove it
    htmlElement.removeAttribute(attributeName);
  } else {
    // If attribute doesn't exist, add it
    htmlElement.setAttribute(attributeName, attributeValue);
  }
  // toggleText();
  buttonbg();
  modeSvg();
}

// function toggleText() {
//   var element = document.getElementById("toggleButton");
//   var currentText = element.textContent;
//   var newText = currentText === "Dark Mode" ? "Light Mode" : "Dark Mode";

//   // Update the text content of the element
//   element.textContent = newText;
// }

function buttonbg() {
  let element = document.getElementById("toggleButton");
  if (element.classList.contains("btn-dark")) {
    element.classList.remove("btn-dark");
    element.classList.add("btn-light");
  } else if (element.classList.contains("btn-light")) {
    element.classList.remove("btn-light");
    element.classList.add("btn-dark");
  }
}
function modeSvg() {
  let element = document.getElementById("toggleButton");
  let srcValue = element.getAttribute("src");

  if (srcValue === "lightbulb-fill.svg") {
    element.setAttribute("src", "lightbulb.svg");
  } else {
    element.setAttribute("src", "lightbulb-fill.svg");
  }
}
// Add event listener to button
document
  .getElementById("toggleButton")
  .addEventListener("click", toggleAttribute);
