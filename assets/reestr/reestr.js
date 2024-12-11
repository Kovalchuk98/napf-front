import "../common_scripts/common_scripts.js";
/* empty css                       */
/* empty css                     */
/* empty css                       */
/* empty css               */
/* empty css                     */
/* empty css                    */
let reestrTabs = document.querySelectorAll(".reestr_tab_item");
reestrTabs.forEach((tab) => {
  tab.addEventListener("click", function(e) {
    e.preventDefault();
    reestrTabs.forEach((tab2) => {
      tab2.classList.remove("active_tab");
    });
    tab.classList.add("active_tab");
  });
});
let compactDocuments = document.querySelectorAll(".document_compact");
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
let reestr_tab_svg = document.querySelector(".reestr_tab2_item_icon");
function checkScreenWidth() {
  let screenWidth = window.innerWidth;
  let documents_icons = document.querySelectorAll(".document_icon");
  if (screenWidth <= 992) {
    reestr_tab_svg.childNodes[1].childNodes;
    reestr_tab_svg.setAttribute("viewBox", "0 0 45 45");
    reestr_tab_svg.setAttribute("width", "45");
    reestr_tab_svg.setAttribute("height", "45");
    let masks = reestr_tab_svg.querySelectorAll("mask");
    let clipPath = reestr_tab_svg.querySelector("#clip0_3728_11255");
    clipPath.childNodes[1].setAttribute("width", "45");
    for (let i = 2; i < masks.length; i++) {
      let item = masks[i];
      let next = item.nextElementSibling;
      next.remove();
      item.remove();
    }
    documents_icons.forEach((item) => {
      item.setAttribute("src", "../../icons/zip.svg");
    });
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);
