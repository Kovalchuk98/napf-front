import { j as jQuery } from "../jquery/jquery.js";
import "../common_scripts/common_scripts.js";
/* empty css                       */
/* empty css                     */
/* empty css                    */
import "../owl.carousel/owl.carousel.js";
let pdcCards = document.querySelectorAll(".pdc_card");
let pdcLinks = document.querySelectorAll(".block_link_filled");
let pdcDataInfo = document.querySelectorAll(".pdc_data_info");
let pdc_membersList = document.getElementsByClassName("pdc_members_list")[0];
function checkScreenWidth() {
  let screenWidth = window.innerWidth;
  if (screenWidth <= 1539) {
    pdcCards.forEach((card) => {
      card.classList.add("active_wrapper");
    });
    pdcLinks.forEach((link) => {
      link.classList.add("active_link");
    });
  } else {
    pdcCards.forEach((card) => {
      card.classList.remove("active_wrapper");
    });
    pdcLinks.forEach((link) => {
      link.classList.remove("active_link");
    });
  }
  let members = document.querySelectorAll(".pdc_members_item");
  if (screenWidth <= 768) {
    pdc_membersList.classList.add("owl-carousel", "owl-theme");
    jQuery(".pdc_members_list").owlCarousel({
      loop: true,
      responsiveClass: true,
      margin: 20,
      autoplay: false,
      dots: true,
      dotsEach: 5,
      nav: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
          mouseDrag: true,
          touchDrag: true
        },
        375: {
          items: 1,
          stagePadding: 70,
          mouseDrag: true,
          touchDrag: true
        }
      }
    });
    members.forEach((member) => {
      member.classList.add("active_wrapper");
    });
    if (pdcDataInfo) {
      pdcDataInfo.forEach((data) => {
        let wrapper = data.parentNode.parentElement;
        let link = data.querySelector(".block_link_filled.active_link");
        if (wrapper.lastChild.className !== "block_link_filled active_link") {
          wrapper.appendChild(link);
        }
      });
    }
  } else {
    if (pdc_membersList.className.includes("owl-carousel")) {
      pdc_membersList.classList.remove("owl-carousel", "owl-theme");
    }
    jQuery(".pdc_members_list").owlCarousel("destroy");
    pdcDataInfo.forEach((data) => {
      let wrapper = data.parentNode.parentElement;
      let link = wrapper.querySelector(".block_link_filled.active_link");
      if (link) {
        data.appendChild(link);
      }
    });
    members.forEach((member) => {
      member.classList.remove("active_wrapper");
    });
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);
