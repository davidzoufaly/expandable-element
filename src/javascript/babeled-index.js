"use strict";

//! Specific data for this examples as object
var contentData = {
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent dapibus. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam sit amet magna in magna gravida vehicula. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
  DOMElement: document.querySelector("#content")
}; //! Universal method for fade in effect

var opacity;

var fadeFunction = function fadeFunction(el) {
  if (opacity < 0.9) {
    opacity += 0.1;
    setTimeout(function () {
      return fadeFunction(el);
    }, 30);
  }

  el.style.opacity = opacity;
}; //! Universal method for content toggle - show / hide


var toggleContent = function toggleContent(text, elementInDOM) {
  // Return statement of this function with if statement.
  if (elementInDOM.children.length === 0) {
    // 1a) If element does not have children (is empty) add content into DOM
    return elementInDOM.innerHTML = "<div>\n                      <p>" + text + "</p>\n                  </div>", // 2a) Show it with fade effect
    opacity = 0, fadeFunction(elementInDOM), // 3a) Made element accessible by assistive technology
    elementInDOM.setAttribute("aria-hidden", "false");
  } else {
    return (// 1b) Otherwise remove it from DOM and made it ignored by assistive technology
      elementInDOM.setAttribute("aria-hidden", "true"), elementInDOM.removeChild(elementInDOM.childNodes[0])
    );
  }
}; //! Handling CSS keyframe based animation with classes


var handlingAnimation = function handlingAnimation(icon) {
  if (icon.contains("container__title__icon--animation--forward")) {
    icon.toggle("container__title__icon--animation--back");
    setTimeout(function () {
      //wait for animation is done
      icon.toggle("container__title__icon--animation--forward");
    }, 300);
  } else if (icon.contains("container__title__icon--animation--back")) {
    icon.toggle("container__title__icon--animation--forward");
    icon.toggle("container__title__icon--animation--back");
  } else {
    icon.toggle("container__title__icon--animation--forward");
  }
}; //! Destructuring data object


var text = contentData.text,
    DOMElement = contentData.DOMElement; //! Handling clicks on title
// 1) Select our title element in DOM

document.querySelector("#toggle-content-title") // 2) Add event listener with click trigger
.addEventListener("click", function () {
  // 3) callback fucntion running toggleContent method with our data passed as parameters and hadnlingAmination method with our span passed as parameter
  toggleContent(text, DOMElement), false;
  handlingAnimation(this.childNodes[1].classList);
});