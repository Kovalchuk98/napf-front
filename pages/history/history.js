
import '../../src/styles/_reset.scss';
import '../../style.scss';
import '../../src/styles/_custom.scss';
import '../../src/styles/_common.scss';

import '../../src/styles/UI/header.scss';
import '../../src/styles/UI/accordion.scss';
import '../../src/styles/UI/breadcrumb.scss';
import '../../src/styles/UI/auth_menu.scss';

import '../../src/styles/blocks/mailings.scss';
import '../../src/styles/blocks/events.scss';

import '../../src/styles/history/index.scss';

import '../../src/scripts/common_scripts.js';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

let historyContentItems = document.querySelectorAll('.history_content_item');

function clearContent() {
    historyContentItems.forEach((item, index) => {
        item.classList.remove('selected_content_item');
    })
}


let yearCaroulsel = $('.history_select_list').owlCarousel({
    responsiveClass: true,
    autoplay: false,
    stagePadding: 20,
    dots: false,
    nav: true,
    navText: [
        '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2306 17.9996L21.046 5.53809M33.2306 17.9996L21.046 30.4612M33.2306 17.9996H17.9998H2.76904" stroke="#5979C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2306 17.9996L21.046 5.53809M33.2306 17.9996L21.046 30.4612M33.2306 17.9996H17.9998H2.76904" stroke="#5979C4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    ],
    onTranslated: function (event) {
        setActiveYear(event);
        showContentByYear();
    },
    responsive: {
        0: {
            items: 4,
        },
        450: {
            items: 6,
        },
        600: {
            items: 5,
        },
        800: {
            items: 5,
        },
        1024: {
            items: 8,
        },
        1240: {
            items: 6,
        },
        1540: {
            items: 6,
        },
        1800: {
            items: 7,
        },
    }
})



function showContentByYear() {

    clearContent();

    let year = document.querySelector('.selected')?.childNodes[0]?.textContent;

    historyContentItems.forEach(function (contentItem) {
        contentItem.classList.remove('selected_content_item');
        if (contentItem.getAttribute('data-year') === year) {
            contentItem.classList.add('selected_content_item');
        }
    });
}

function setActiveYear(event) {

    let currentItems = yearCaroulsel.find('.owl-item.active');

    let currentSelect = yearCaroulsel.find('.owl-item.active').first().index();

    $('.owl-item.selected').removeClass('selected');
    if (currentSelect + event.page.size < event.item.count) {
        $('.owl-item.active').first().addClass('selected');
    } else {
        $('.owl-item.selected').removeClass('selected');
    }

    currentItems.on('click', function (e) {

        let yearIndex = $(this).index();

        if (yearIndex + event.page.size < event.item.count) {
            $('.owl-item.selected').removeClass('selected');
            $('.owl-item.active').first().addClass('selected');
        } else {
            $('.owl-item.selected').removeClass('selected');
            this.classList.add('selected');
        }
        yearCaroulsel.trigger('to.owl.carousel', yearIndex, 200, true);
        showContentByYear();
    })
}

document.addEventListener("DOMContentLoaded", function (event) {

    let currentItems = yearCaroulsel.find('.owl-item.active');

    $('.owl-item.active').first().addClass('selected');

    currentItems.on('click', function (event) {
        let yearIndex = $(this).index();
        yearCaroulsel.trigger('to.owl.carousel', yearIndex, 200, true);
    })
});


