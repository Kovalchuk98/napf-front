import "../common_scripts/common_scripts.js";
/* empty css                       */
/* empty css                     */
/* empty css                       */
/* empty css           */
/* empty css             */
/* empty css                     */
/* empty css                    */
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
