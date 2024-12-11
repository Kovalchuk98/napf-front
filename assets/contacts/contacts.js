import "../common_scripts/common_scripts.js";
/* empty css                       */
/* empty css                     */
/* empty css                    */
import "../owl.carousel/owl.carousel.js";
import "../jquery/jquery.js";
let contactsAddress = document.getElementsByClassName("contacts_address_wrapper")[0];
let contacts_block = document.getElementsByClassName("contacts_block")[0];
let contacts_info = document.getElementsByClassName("contacts_info")[0];
function checkScreenWidth() {
  let screenWidth = window.innerWidth;
  if (screenWidth <= 991) {
    if (contactsAddress && contacts_block) {
      contacts_block.appendChild(contactsAddress);
    }
  } else {
    contacts_info.appendChild(contactsAddress);
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);
