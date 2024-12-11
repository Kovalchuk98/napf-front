import '../../src/styles/_reset.scss';
import '../../style.scss';
import '../../src/styles/_custom.scss';
import '../../src/styles/_common.scss';

import '../../src/styles/UI/header.scss';
import '../../src/styles/UI/accordion.scss';
import '../../src/styles/UI/breadcrumb.scss';
import '../../src/styles/UI/pagination.scss';
import '../../src/styles/UI/auth_menu.scss';
import '../../src/styles/UI/select.scss';

import '../../src/styles/blocks/mailings.scss';
import '../../src/styles/blocks/events.scss';

import '../../src/styles/events/index.scss';
import '../../src/styles/events_archive/index.scss';

import '../../src/scripts/common_scripts.js';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

// let monthTitles = Array.from(document.querySelectorAll('.events_month_item > p')).map(el => el.textContent);

// let monthCaroulsel = jQuery(".events_month_list").owlCarousel({
//     responsiveClass: true,
//     autoplay: false,
//     stagePadding: 30,
//     nav: true,
//     dots: false,
//     navText: [
//         '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2306 17.9996L21.046 5.53809M33.2306 17.9996L21.046 30.4612M33.2306 17.9996H17.9998H2.76904" stroke="#5979C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
//         '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2306 17.9996L21.046 5.53809M33.2306 17.9996L21.046 30.4612M33.2306 17.9996H17.9998H2.76904" stroke="#5979C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
//     ],
//     onTranslated: function (event) {
//         setActiveMonth(event);
//     },
//     responsive: {
//         0: {
//             items: 1,
//             stagePadding: 0,
//             mouseDrag: false,
//             touchDrag: false
//         },
//         450: {
//             items: 2,
//             stagePadding: 10,
//             mouseDrag: false,
//             touchDrag: false
//         },
//         600: {
//             items: 3,
//             stagePadding: 10,
//             mouseDrag: false,
//             touchDrag: false
//         },
//         800: {
//             items: 4,
//             stagePadding: 20,
//             mouseDrag: false,
//             touchDrag: false
//         },
//         1024: {
//             items: 6,
//             margin: 0,
//             stagePadding: 10,
//             mouseDrag: false,
//             touchDrag: false
//         },
//         1200: {
//             items: 8,
//             stagePadding: 12,
//             mouseDrag: false,
//             touchDrag: false
//         }
//     }
// });


// function setActiveMonth(event) {
//     let currentItems = monthCaroulsel.find(".owl-item.active");
//     let currentSelect = monthCaroulsel.find(".owl-item.active").first().index();
//     let lastActiveItem = monthCaroulsel.find(".owl-item.active").last().index();
//     let prevButton = document.querySelector(".owl-prev");
//     let nextButton = document.querySelector(".owl-next");


//     // jQuery(".owl-item.active_month").removeClass("active_month");
//     // jQuery(".owl-item.active_month .events_month_item").removeClass('events_month_item_active');

//     jQuery(".owl-item.active_month").removeClass("active_month");
//     jQuery(".owl-item.active_month .events_month_item_active").removeClass('events_month_item_active');
//     if (lastActiveItem <= event.item.count - 1) {
//         jQuery(".owl-item.active").first().addClass("active_month");
//         jQuery(".owl-item.active_month .events_month_item").first().addClass('events_month_item_active');
//     } else {
//         jQuery(".owl-item.active_month").removeClass("active_month");
//         jQuery(".owl-item.active_month .events_month_item").removeClass('events_month_item_active');
//     }

//     // jQuery(".owl-item.active_month").removeClass("active_month");
//     // jQuery(".owl-item.active_month .events_month_item_active").removeClass('events_month_item_active');
//     // if (currentSelect + event.page.size <= event.item.count) {

//     //     jQuery(".owl-item.active").first().addClass("active_month");
//     //     jQuery(".owl-item.active_month .events_month_item").first().addClass('events_month_item_active');
//     // } else {
//     //     jQuery(".owl-item.active_month").removeClass("active_month");
//     //     jQuery(".owl-item.active_month .events_month_item_active").removeClass('events_month_item_active');
//     // }

//     currentItems.on("click", function (e) {
//         let monthIndex = jQuery(this).index();
//         console.log(monthIndex);
//         // jQuery(".owl-item.active_month").removeClass("active_month");
//         // jQuery(".owl-item.active_month .events_month_item_active").removeClass('events_month_item_active');
//         if (monthIndex + event.page.size <= event.item.count) {
//             jQuery(".owl-item.active_month").removeClass("active_month");
//             jQuery(".owl-item.active_month .events_month_item_active").removeClass('events_month_item_active');
//             jQuery(".owl-item.active").first().addClass("active_month");
//             jQuery(".owl-item.active .events_month_item").first().addClass('events_month_item_active');
//         } else {
//             jQuery(".owl-item.active_month").removeClass("active_month");
//             jQuery(".owl-item.active_month .events_month_item_active").removeClass('events_month_item_active');
//             this.classList.add("active_month");
//             this.querySelector('.events_month_item').classList.add('events_month_item_active');
//         }
//         monthCaroulsel.trigger("to.owl.carousel", monthIndex, 200, true);
//     });
// }
// document.addEventListener("DOMContentLoaded", function () {
//     let currentItems = monthCaroulsel.find(".owl-item.active");
//     let currentItemsMonth = monthCaroulsel.find(".owl-item.active .events_month_item");

//     jQuery(".owl-item.active").first().addClass("active_month");
//     jQuery(".owl-item.active .events_month_item").first().addClass('events_month_item_active');

//     currentItems.on("click", function (event) {
//         let monthIndex = jQuery(this).index();
//         // currentItems.removeClass("active_month");
//         // currentItemsMonth.removeClass("events_month_item_active");
//         // currentItems[monthIndex].classList.add("active_month");
//         // currentItemsMonth[monthIndex].classList.add("events_month_item_active");
//         monthCaroulsel.trigger("to.owl.carousel", monthIndex, 200, true);
//     });

//     // let prevButton = document.querySelector(".owl-prev");
//     // prevButton.addEventListener("click", function () {
//     //     let activeMonthItem = currentItems.filter(".active_month");
//     //     console.log('prev', activeMonthItem);

//     //     if (activeMonthItem.index() > 0) {
//     //         activeMonthItem.prev().addClass("active_month");
//     //         activeMonthItem.removeClass("active_month");
//     //         activeMonthItem.children().removeClass("events_month_item_active");
//     //         activeMonthItem.prev().children().addClass("events_month_item_active");
//     //     }
//     // });
//     // let nextButton = document.querySelector(".owl-next");
//     // nextButton.addEventListener("click", function () {
//     //     let activeMonthItem = currentItems.filter(".active_month");
//     //     if (activeMonthItem.index() > 0) {
//     //         activeMonthItem.next().addClass("active_month");
//     //         activeMonthItem.removeClass("active_month");
//     //         activeMonthItem.children().removeClass("events_month_item_active");
//     //         activeMonthItem.next().children().addClass("events_month_item_active");
//     //         // this.trigger('next.owl.carousel', 3000);
//     //     }
//     // });
//     const selectSelected = document.getElementsByClassName("select_selected");
//     function getQueryParam(param) {
//         const urlParams = new URL(window.location).searchParams;
//         return urlParams.get(param);
//     }
//     const year = getQueryParam("year");
//     if (year) {
//         selectSelected[0].textContent = year;
//     }
//     const config = { attributes: true, childList: true, subtree: true };
//     const callback = function (mutationsList, observer2) {
//         for (const mutation of mutationsList) {
//             if (mutation.type === "childList") {
//                 let selectedYear = selectSelected[0].textContent;
//                 let currentUrl = window.location.href;
//                 let newUrl = new URL(currentUrl);
//                 newUrl.searchParams.set("year", selectedYear);
//                 window.location.href = newUrl.href;
//             }
//         }
//     };
//     const observer = new MutationObserver(callback);
//     observer.observe(selectSelected[0], config);
// });

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
    //jQuery('.events_month_item[data-month="'+m+'"]').trigger('click');
    jQuery('.owl-item.active_month').removeClass('active_month');
    jQuery('.owl-item.active_month .events_month_item').removeClass('events_month_item_active');
    jQuery('.events_month_item[data-month="' + m + '"]').closest('.owl-item').addClass('active_month');
    monthCaroulsel.trigger("to.owl.carousel", m - 1, 200, true);
}

function setActiveMonth(event, m = 0) {
    let currentItems = monthCaroulsel.find(".owl-item.active");
    let currentSelect = monthCaroulsel.find(".owl-item.active").first().index();
    let lastActiveItem = monthCaroulsel.find(".owl-item.active").last().index()
    let prevButton = document.querySelector(".owl-prev");
    let nextButton = document.querySelector(".owl-next");
    prevButton.addEventListener("click", function () {
        let activeMonthItem = currentItems.filter(".active_month");
        if (activeMonthItem.index() > 0) {
            activeMonthItem.prev().addClass("active_month");
            activeMonthItem.removeClass("active_month");
            activeMonthItem.children().removeClass("events_month_item_active");
            activeMonthItem.prev().children().addClass("events_month_item_active");
        }
    });
    nextButton.addEventListener("click", function () {
        let activeMonthItem = currentItems.filter(".active_month");
        if (activeMonthItem.index() > 0) {
            activeMonthItem.removeClass("active_month");
            activeMonthItem.next().addClass("active_month");
            activeMonthItem.children().removeClass("events_month_item_active");
            activeMonthItem.next().children().addClass("events_month_item_active");
        }
    });

    jQuery(".owl-item.active_month").removeClass("active_month");
    jQuery(".owl-item.active_month .events_month_item_active").removeClass('events_month_item_active');
    if (lastActiveItem <= event.item.count - 1) {
        jQuery(".owl-item.active").first().addClass("active_month");
        jQuery(".owl-item.active_month .events_month_item").first().addClass('events_month_item_active');
    } else {
        jQuery(".owl-item.active_month").removeClass("active_month");
        jQuery(".owl-item.active_month .events_month_item").removeClass('events_month_item_active');
    }

    // jQuery(".owl-item.active_month").removeClass("active_month");
    // jQuery(".owl-item.active_month.events_month_item").addClass('events_month_item_active');
    // if (currentSelect + event.page.size <= event.item.count) {
    //     jQuery(".owl-item.active").first().addClass("active_month");
    //     jQuery(".owl-item.active_month.events_month_item").addClass('events_month_item_active');
    // } else {
    //     jQuery(".owl-item.active_month").removeClass("active_month");
    //     jQuery(".owl-item.active_month.events_month_item").removeClass('events_month_item_active');
    // }
    currentItems.on("click", function (e) {
        let monthIndex = jQuery(this).index();
        // console.info('monthIndex', monthIndex);
        if (monthIndex + event.page.size <= event.item.count) {
            jQuery(".owl-item.active_month").removeClass("active_month");
            jQuery(".owl-item.active_month.events_month_item").removeClass('events_month_item_active');
            jQuery(".owl-item.active").first().addClass("active_month");
            jQuery(".owl-item.active.events_month_item").first().addClass('events_month_item_active');
        } else {
            jQuery(".owl-item.active_month").removeClass("active_month");
            jQuery(".owl-item.active_month.events_month_item").removeClass('events_month_item_active');
            this.classList.add("active_month");
            this.querySelector('.events_month_item').classList.add('events_month_item_active');
        }
        monthCaroulsel.trigger("to.owl.carousel", monthIndex, 200, true);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    let currentItems = monthCaroulsel.find(".owl-item");
    let currentItemsMonth = monthCaroulsel.find(".owl-item .events_month_item");
    jQuery(".owl-item.active").first().addClass("active_month");
    jQuery(".owl-item.active.events_month_item").first().addClass('events_month_item_active');
    currentItems.on("click", function (event) {
        let monthIndex = jQuery(this).index();
        console.info('monthIndex', monthIndex);
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
    const callback = function (mutationsList, observer2) {
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

    var m = jQuery('.events_month_item_active').attr('data-month');
    setMonth(m);

});

