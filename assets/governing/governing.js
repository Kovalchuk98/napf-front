import { j as jQuery } from "../jquery/jquery.js";
import "../owl.carousel/owl.carousel.js";
import "../common_scripts/common_scripts.js";
/* empty css                       */
/* empty css                     */
/* empty css                     */
/* empty css                    */
let more_links = document.querySelectorAll(".read_more_link");
let dialog = document.querySelector("#dialog");
let dialogContent = document.querySelector(".dialog_content");
let closeDialogBtn = document.querySelector(".close_btn");
let closeMobileDialogBtn = document.querySelector(".mobile_close_btn");
more_links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("scroll_lock");
    dialog.showModal();
    let dialog_content = e.currentTarget.parentNode.parentNode.cloneNode(true);
    dialogContent.appendChild(dialog_content);
  });
});
function closeDialog() {
  dialog.close();
  document.body.classList.remove("scroll_lock");
  dialogContent.removeChild(dialogContent.lastElementChild);
}
closeDialogBtn.addEventListener("click", (event) => {
  closeDialog();
});
closeMobileDialogBtn.addEventListener("click", (event) => {
  closeDialog();
});
dialog.addEventListener("click", (event) => {
  if (event.target == dialog) {
    closeDialog();
  }
});
dialog.addEventListener("cancel", (event) => {
  closeDialog();
});
function showCompactDocuments() {
  let documents_list_item = document.querySelectorAll(".documents_list_item");
  let compactDocuments = document.querySelectorAll(".document_compact");
  let documents_list = document.querySelectorAll(".documents_list");
  console.log(documents_list);
  if (documents_list) {
    documents_list.forEach((item) => {
      item.classList.add("documents_list_compact");
    });
  }
  documents_list_item.forEach((item) => {
    item.classList.add("document_compact");
  });
  compactDocuments.forEach((document2) => {
    let icon = document2.querySelector(".document_icon");
    let link = document2.querySelector(".document_link");
    link.classList.remove("block_link_filled");
    let link_icon = link.querySelector(".document_link_icon");
    let link_text = link.querySelector("p");
    link_icon && link_icon.remove();
    link_text.textContent = "Скачать";
    icon && link.prepend(icon);
  });
}
function checkScreenWidth() {
  let governing_members_list = document.getElementsByClassName("governing_members_list")[0];
  let screenWidth = window.innerWidth;
  if (screenWidth <= 1024) {
    showCompactDocuments();
  }
  if (screenWidth <= 768) {
    governing_members_list.classList.add("owl-carousel", "owl-theme");
    jQuery(".governing_members_list").owlCarousel({
      loop: true,
      margin: 40,
      responsiveClass: true,
      autoplay: true,
      autoplay: false,
      autoplayTimeout: 3e3,
      navText: [
        '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2306 17.9996L21.046 5.53809M33.2306 17.9996L21.046 30.4612M33.2306 17.9996H17.9998H2.76904" stroke="#5979C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2306 17.9996L21.046 5.53809M33.2306 17.9996L21.046 30.4612M33.2306 17.9996H17.9998H2.76904" stroke="#5979C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      ],
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
          dots: true,
          mouseDrag: true,
          touchDrag: true,
          dotsEach: 4
        }
      }
    });
  } else {
    governing_members_list.classList.remove("owl-carousel", "owl-theme");
    jQuery(".governing_members_list").owlCarousel("destroy");
  }
}
checkScreenWidth();
if (window.innerWidth <= 1024) {
  showCompactDocuments();
}
window.addEventListener("resize", checkScreenWidth);
