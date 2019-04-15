//! Specific data for this examples as object
const contentData = {
  text:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent dapibus. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam sit amet magna in magna gravida vehicula. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
  DOMElement: document.querySelector("#content")
};

//! Universal method for content toggle - show / hide
const toggleContent = (text, elementInDOM) => {
  // Return statement of this function with ternary operator.
  return (
    // If element does not have children add content into DOM
    elementInDOM.children.length === 0
      ? (elementInDOM.innerHTML = `<div>
                    <p>${text}</p>
                </div>`)
      : // Otherwise remove it from DOM
        elementInDOM.removeChild(elementInDOM.childNodes[0])
  );
};

//! Destructuring data object
const { text, DOMElement } = contentData;

//! Handling clicks on title
// 1) Select our title element in DOM
document
.querySelector("#toggle-content-title")
// 2) Add event listener with click trigger
.addEventListener("click", function() {
    // 3) callback fucntion running toggleContent method with our data passed as parameters
    toggleContent(text, DOMElement), false;
  });
