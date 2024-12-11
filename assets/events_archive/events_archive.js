import { j as jQuery } from "../jquery/jquery.js";
import "../common_scripts/common_scripts.js";
/* empty css                       */
/* empty css                     */
/* empty css                       */
/* empty css               */
/* empty css                    */
/* empty css             */
import "../owl.carousel/owl.carousel.js";
let monthCaroulsel = jQuery(".events_month_list").owlCarousel({
  responsiveClass: true,
  autoplay: false,
  stagePadding: 30,
  nav: true,
  dots: false,
  navText: [
    '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2306 17.9996L21.046 5.53809M33.2306 17.9996L21.046 30.4612M33.2306 17.9996H17.9998H2.76904" stroke="#5979C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2306 17.9996L21.046 5.53809M33.2306 17.9996L21.046 30.4612M33.2306 17.9996H17.9998H2.76904" stroke="#5979C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  ],
  // onTranslated: function (event) {
  //     setActiveMonth(event);
  // },
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
      mouseDrag: false,
      touchDrag: false
    },
    450: {
      items: 2,
      stagePadding: 10,
      mouseDrag: false,
      touchDrag: false
    },
    600: {
      items: 3,
      stagePadding: 10,
      mouseDrag: false,
      touchDrag: false
    },
    800: {
      items: 4,
      stagePadding: 20,
      mouseDrag: false,
      touchDrag: false
    },
    1024: {
      items: 6,
      margin: 0,
      stagePadding: 10,
      mouseDrag: false,
      touchDrag: false
    },
    1200: {
      items: 8,
      stagePadding: 12,
      mouseDrag: false,
      touchDrag: false
    }
  }
});
function setMonth(m) {
  jQuery(".owl-item.active_month").removeClass("active_month");
  jQuery(".owl-item.active_month .events_month_item").removeClass("events_month_item_active");
  jQuery('.events_month_item[data-month="' + m + '"]').closest(".owl-item").addClass("active_month");
  monthCaroulsel.trigger("to.owl.carousel", m - 1, 200, true);
}
document.addEventListener("DOMContentLoaded", function() {
  let currentItems = monthCaroulsel.find(".owl-item");
  let currentItemsMonth = monthCaroulsel.find(".owl-item .events_month_item");
  jQuery(".owl-item.active").first().addClass("active_month");
  jQuery(".owl-item.active.events_month_item").first().addClass("events_month_item_active");
  currentItems.on("click", function(event) {
    let monthIndex = jQuery(this).index();
    console.info("monthIndex", monthIndex);
    currentItems.removeClass("active_month");
    currentItemsMonth.removeClass("events_month_item_active");
    currentItems[monthIndex].classList.add("active_month");
    currentItemsMonth[monthIndex].classList.add("events_month_item_active");
    monthCaroulsel.trigger("to.owl.carousel", monthIndex, 200, true);
  });
  const selectSelected = document.getElementsByClassName("select_selected");
  function getQueryParam(param) {
    const urlParams = new URL(window.location).searchParams;
    return urlParams.get(param);
  }
  const year = getQueryParam("year");
  if (year) {
    selectSelected[0].textContent = year;
  }
  const config = { attributes: true, childList: true, subtree: true };
  const callback = function(mutationsList, observer2) {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        let selectedYear = selectSelected[0].textContent;
        let currentUrl = window.location.href;
        let newUrl = new URL(currentUrl);
        newUrl.searchParams.set("year", selectedYear);
        window.location.href = newUrl.href;
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(selectSelected[0], config);
  var m = jQuery(".events_month_item_active").attr("data-month");
  setMonth(m);
});
