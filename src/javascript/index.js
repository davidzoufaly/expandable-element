//! Specific data for this examples as object
const contentData = {
  text:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent dapibus. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam sit amet magna in magna gravida vehicula. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
  DOMPlaceHolderElement: document.querySelector("#content-id"),
  DOMTriggerElement: document.querySelector("#toggle-content-title")
};

//! Universal method for fade in effect
let opacity;
const fadeFunction = el => {
  if (opacity < 0.9) {
    opacity += 0.1;
    setTimeout(() => fadeFunction(el), 30);
  }
  el.style.opacity = opacity;
};

//! Universal method for content toggle - show / hide
const toggleContent = (text, elementInDOM) => {
  // Return statement of this function with if statement.
  if (elementInDOM.children.length === 0) {
    // 1a) If element does not have children (is empty) add content into DOM
    return (
      (elementInDOM.innerHTML = `<div>
                      <p>${text}</p>
                  </div>`),
      // 2a) Show it with fade effect
      (opacity = 0),
      fadeFunction(elementInDOM),
      // 3a) Made element accessible by assistive technology
      elementInDOM.setAttribute("aria-hidden", "false")
    );
  } else {
    return (
      // 1b) Otherwise remove it from DOM and made it ignored by assistive technology
      elementInDOM.setAttribute("aria-hidden", "true"),
      elementInDOM.removeChild(elementInDOM.childNodes[0])
    );
  }
};

//! Handling CSS keyframe based animation with classes
const handlingIconAnimations = icon => {
  if (icon.contains("container__title__icon--animation--forward")) {
    icon.toggle("container__title__icon--animation--back");
    setTimeout(() => {
      //wait for animation is done
      icon.toggle("container__title__icon--animation--forward");
    }, 300);
  } else if (icon.contains("container__title__icon--animation--back")) {
    icon.toggle("container__title__icon--animation--forward");
    icon.toggle("container__title__icon--animation--back");
  } else {
    icon.toggle("container__title__icon--animation--forward");
  }
};

//! Destructuring data object
const { text, DOMPlaceHolderElement, DOMTriggerElement } = contentData;

//! Handling clicks on title
// 1) Select our title element in DOM
DOMTriggerElement
  // 2) Add event listener with click trigger
  .addEventListener("click", function() {
    // 3) callback fucntion running toggleContent method with our data passed as parameters and hadnlingAmination method with our span passed as parameter
    toggleContent(text, DOMPlaceHolderElement), false;
    handlingIconAnimations(this.childNodes[1].classList);
  });
