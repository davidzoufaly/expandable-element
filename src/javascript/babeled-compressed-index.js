"use strict";var opacity,contentData={text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer imperdiet lectus quis justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent dapibus. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam sit amet magna in magna gravida vehicula. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",DOMElement:document.querySelector("#content-id"),DOMTriggerElement:document.querySelector("#toggle-content-title")},fadeFunction=function t(e){opacity<.9&&(opacity+=.1,setTimeout(function(){return t(e)},30)),e.style.opacity=opacity},toggleContent=function(t,e){return 0===e.children.length?(e.innerHTML="<div>\n                      <p>".concat(t,"</p>\n                  </div>"),opacity=0,fadeFunction(e),e.setAttribute("aria-hidden","false")):(e.setAttribute("aria-hidden","true"),e.removeChild(e.childNodes[0]))},handlingAnimation=function(t){t.contains("container__title__icon--animation--forward")?(t.toggle("container__title__icon--animation--back"),setTimeout(function(){t.toggle("container__title__icon--animation--forward")},300)):t.contains("container__title__icon--animation--back")?(t.toggle("container__title__icon--animation--forward"),t.toggle("container__title__icon--animation--back")):t.toggle("container__title__icon--animation--forward")},text=contentData.text,DOMElement=contentData.DOMElement,DOMTriggerElement=contentData.DOMTriggerElement;DOMTriggerElement.addEventListener("click",function(){toggleContent(text,DOMElement),handlingAnimation(this.childNodes[1].classList)});