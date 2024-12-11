import './select.js';

let auth_link = document.getElementsByClassName('auth_link')[0];
let mobile_auth_link = document.getElementsByClassName('mobile_auth_link')[0];

let auth_icon = document.getElementsByClassName('auth_icon')[0];
let mobile_auth_icon = document.getElementsByClassName('mobile_auth_icon')[0];
let auth_icon_path = document.getElementById('auth_icon_path');
let mobile_auth_icon_path = document.getElementById('mobile_auth_icon_path');

let sidebar_menu = document.getElementsByClassName('sidebar_menu')[0];
let menu_button = document.getElementsByClassName('sidebar_menu_button')[0];


let mobile_menu_button = document.getElementsByClassName('mobile_menu_button')[0];
let mobile_menu_button_close = document.getElementsByClassName('mobile_menu_button_close')[0];

let sidebar_drawer = document.getElementsByClassName('sidebar_drawer')[0];

let sidebar_menu_item = document.querySelectorAll('.sidebar_menu_item');


let events_block = document.getElementsByClassName('events_block')[0];


let auth_menu_drawer = document.getElementsByClassName('auth_menu_drawer')[0];
let auth_drawer_close_button = document.getElementsByClassName('auth_menu_close_button')[0];


let link_archive = document.getElementsByClassName('link_archive_text')[0];



function createMobileDrawerMenu() {
    let drawer_list = document.querySelectorAll('.sidebar_drawer .sidebar_items_wrapper')[0];

    let sidebar_items = document.querySelectorAll('.sidebar_items_wrapper')[0];

    sidebar_items.remove()

    let mobileMenu = sidebar_items.cloneNode(true)
    mobileMenu.classList.add('mobile_list');

    sidebar_drawer.append(mobileMenu);

    sidebar_drawer.classList.add('drawer_active');

}

sidebar_menu_item.forEach(item => {

    let isActive = false;

    item.addEventListener('click', (item, index) => {

        let current = document.getElementsByClassName("active_item");
        let drawer_list = document.querySelectorAll('.sidebar_drawer .item_sublist_wrapper')[0];

        let isSidebarOpen = sidebar_drawer.classList.contains('drawer_active');

        if (item.currentTarget.classList.contains('active_item') && isSidebarOpen) {
            sidebar_drawer.classList.remove('drawer_active');
            current[0].classList.remove('active_item');
            isActive = true
        } else if (!sidebar_menu.classList.contains('sidebar_menu_personal')) {

            sidebar_drawer.classList.add('drawer_active');
            window.document.body.style.overflow = 'hidden';

            if (item.currentTarget.childNodes[1]) {

                drawer_list && drawer_list.remove()
                let testData = item.currentTarget.childNodes[1].cloneNode(true);

                let frag = document.createDocumentFragment();
                frag.append(testData);

                sidebar_drawer.appendChild(frag);
            }

            if (current.length) {
                current[0].classList.toggle('active_item');
            }
            item.currentTarget.classList.add('active_item')
            isActive = false

        } else {

        }

    })
})

// Hide sidebar drawer on mouse leave
sidebar_drawer.addEventListener('mouseleave', () => {
    sidebar_menu_item.forEach(item => {
        item.classList.remove('active_item');
    })
    sidebar_drawer.classList.remove('drawer_active');
    document.body.style.overflow = 'auto';
});

function responsContent() {

    let screenWidth = window.innerWidth;

    let sidebar_hidden = document.getElementsByClassName('sidebar_hidden')[0];

    let content = document.querySelectorAll('.main_content')[0];
    let footer = document.querySelectorAll('footer')[0];
    let header = document.querySelectorAll('header')[0];

    let headerMargins = [];
    let contentMargins = [];
    let footerMargins = [];

    if (content.classList.contains('main_content_personal')) {
        headerMargins.push('170px', '140px', '70px', '0px')
        contentMargins.push('170px', '90px', '0px')
        footerMargins.push('170px', '90px', '35px')
    } else {
        headerMargins.push('150px', '120px', '50px', '0px')
        contentMargins.push('150px', '70px', '0px')
        footerMargins.push('150px', '70px', '15px')
    }

    if (!sidebar_hidden && screenWidth <= 1900 && screenWidth >= 1540) {

        header.style.paddingLeft = headerMargins[0];
        header.style.paddingRight = headerMargins[2];
        content.style.marginLeft = contentMargins[0];
        footer.style.paddingLeft = footerMargins[0];


    } else if (sidebar_hidden && screenWidth <= 1900 && screenWidth >= 1540) {

        header.style.paddingLeft = headerMargins[1];
        header.style.paddingRight = headerMargins[2];
        content.style.marginLeft = contentMargins[1];
        footer.style.paddingLeft = footerMargins[1];

    } else if (!sidebar_hidden && screenWidth <= 1539 && screenWidth >= 1240) {

        header.style.paddingLeft = headerMargins[0];
        header.style.paddingRight = headerMargins[2];
        content.style.marginLeft = contentMargins[0];
        footer.style.paddingLeft = footerMargins[0];

    } else if (sidebar_hidden && screenWidth <= 1420 && screenWidth >= 1240) {

        header.style.paddingLeft = headerMargins[0];
        header.style.paddingRight = headerMargins[2];
        content.style.marginLeft = contentMargins[1];
        footer.style.paddingLeft = footerMargins[1];

    } else {

        header.style.paddingLeft = headerMargins[3];
        header.style.paddingRight = headerMargins[3];
        content.style.marginLeft = contentMargins[2];
        footer.style.paddingLeft = footerMargins[2];

    }
}

function cutPagination() {
    let pagination_separator = document.querySelector('.pagination_separator');

    let screenWidth = window.innerWidth;

    if (screenWidth <= 768 && pagination_separator) {
        pagination_separator.nextElementSibling.remove();
        pagination_separator.previousElementSibling.remove();
    }
}


function checkScreenWidth() {

    let screenWidth = window.innerWidth;

    let review_news_link = document.querySelector('.review_news_link');



    if (screenWidth <= 1539) {
        review_news_link && review_news_link.classList.add('active_review_link');

    } else {
        review_news_link && review_news_link.classList.remove('active_review_link');
    }

    if (screenWidth <= 768 && link_archive) {
        link_archive.textContent = 'Архив';
    }

    responsContent();
}

cutPagination();
responsContent();
checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);

menu_button.addEventListener('click', () => {
    let active_sidebar = document.getElementsByClassName('drawer_active');
    let currentActive = document.getElementsByClassName("active_item");
    window.document.body.style.overflow = 'hidden';


    if (active_sidebar.length && currentActive.length) {
        sidebar_drawer.classList.remove('drawer_active');
        currentActive[0].classList.remove('active_item');
        allowScroll();
    } else {
        sidebar_menu.classList.toggle('sidebar_hidden');
        responsContent();
        allowScroll();

    }
})

mobile_menu_button.addEventListener('click', () => {

    createMobileDrawerMenu();

    let mobile_items = document.querySelectorAll('.mobile_list .sidebar_menu_items')[0];
    window.document.body.style.overflow = 'hidden';
    mobile_items.childNodes.forEach((el) => {
        el.addEventListener('click', () => {
            el.classList.toggle('active_mobile_item');
        })
    })
})

mobile_menu_button_close && mobile_menu_button_close.addEventListener('click', () => {
    let mobile_items = document.querySelectorAll('.sidebar_menu_item.active_mobile_item');

    sidebar_drawer.classList.remove('drawer_active');
    allowScroll();

    mobile_items.forEach((el) => {
        el.classList.remove('active_mobile_item');
    })
})

mobile_auth_link && mobile_auth_link.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar_drawer.classList.remove('drawer_active');
    auth_menu_drawer.classList.add('auth_menu_drawer_active');
    window.document.body.style.overflow = 'hidden';
})

mobile_auth_link && mobile_auth_link.addEventListener('mouseenter', () => {
    mobile_auth_icon_path && mobile_auth_icon_path.setAttribute('d', 'M 13.281 1 L 25.852 1 C 26.686 1 27.485 1.339 28.074 1.944 C 28.664 2.548 28.995 3.368 28.995 4.222 L 28.995 26.778 C 28.995 27.632 28.664 28.452 28.074 29.056 C 27.485 29.661 26.686 30 25.852 30 L 13.281 30 M 22.709 15.5 L 16.424 9.056 M 22.709 15.5 L 16.424 21.944 M 22.709 15.5 L 6.995 15.5');
})

mobile_auth_link && mobile_auth_link.addEventListener('mouseleave', () => {
    mobile_auth_icon_path && mobile_auth_icon_path.setAttribute('d', 'M13.2857 1H25.8571C26.6907 1 27.4901 1.33948 28.0795 1.94377C28.6689 2.54805 29 3.36764 29 4.22222V26.7778C29 27.6324 28.6689 28.4519 28.0795 29.0562C27.4901 29.6605 26.6907 30 25.8571 30H13.2857M16.7143 15.5L10.4286 9.05556M16.7143 15.5L10.4286 21.9444M16.7143 15.5H1');
})

auth_link && auth_link.addEventListener('mouseenter', () => {
    auth_icon_path && auth_icon_path.setAttribute('d', 'M 13.281 1 L 25.852 1 C 26.686 1 27.485 1.339 28.074 1.944 C 28.664 2.548 28.995 3.368 28.995 4.222 L 28.995 26.778 C 28.995 27.632 28.664 28.452 28.074 29.056 C 27.485 29.661 26.686 30 25.852 30 L 13.281 30 M 22.709 15.5 L 16.424 9.056 M 22.709 15.5 L 16.424 21.944 M 22.709 15.5 L 6.995 15.5');
})

auth_link && auth_link.addEventListener('mouseleave', () => {
    auth_icon_path && auth_icon_path.setAttribute('d', 'M13.2857 1H25.8571C26.6907 1 27.4901 1.33948 28.0795 1.94377C28.6689 2.54805 29 3.36764 29 4.22222V26.7778C29 27.6324 28.6689 28.4519 28.0795 29.0562C27.4901 29.6605 26.6907 30 25.8571 30H13.2857M16.7143 15.5L10.4286 9.05556M16.7143 15.5L10.4286 21.9444M16.7143 15.5H1');
})

auth_link && auth_link.addEventListener('click', (e) => {
    e.preventDefault();
    auth_menu_drawer && auth_menu_drawer.classList.add('auth_menu_drawer_active');
    window.document.body.style.overflow = 'hidden';
})

auth_drawer_close_button && auth_drawer_close_button.addEventListener('click', () => {
    signInActiveForm();
    auth_menu_drawer.classList.remove('auth_menu_drawer_active');
    allowScroll();
})


// AUTH FORM SWITCHER
let signinBtn = document.querySelector('.signin_button');
let signupBtn = document.querySelector('.signup_button');
let recoveryBtn = document.querySelector('.recovery_button');

let auth_drawer_img = document.querySelector('.auth_drawer_img');

let signin_form = document.querySelector('.auth_signin_form');
let signup_form = document.querySelector('.auth_signup_form');
let recovery_form = document.querySelector('.auth_recovery_form');

let signin_register_link = document.querySelector('.signup_link');
let forgot_password_link = document.querySelector('.forgot_password_link');

signinBtn && signinBtn.addEventListener('click', signInPress);
signupBtn && signupBtn.addEventListener('click', signUpPress);
recoveryBtn && recoveryBtn.addEventListener('click', recoveryPress);

function signInActiveForm(event) {
    signin_form.classList.add('active_form');
    signup_form.classList.remove('active_form');
    recovery_form.classList.remove('active_form');
    auth_drawer_img.classList.toggle('left_side')
}

function signUpActiveForm(event) {
    signup_form.classList.add('active_form');
    signin_form.classList.remove('active_form');
    recovery_form.classList.remove('active_form');
    auth_drawer_img.classList.add('left_side')
}

function recoveryActiveForm(event) {
    recovery_form.classList.add('active_form');
    signup_form.classList.remove('active_form');
    signin_form.classList.remove('active_form');
    auth_drawer_img.classList.toggle('left_side')

}
// Toggle password and text type
signin_form && signin_form.querySelector('.visible_password_button').addEventListener('click', (event) => {
    event.preventDefault();
    let input = signin_form.querySelectorAll('.auth_input')[1];
    if (input.type === 'password') {
        input.type = 'text';
        signin_form.querySelector('.visible_password_button').classList.remove('active_visible');
    } else {
        input.type = 'password';
        signin_form.querySelector('.visible_password_button').classList.add('active_visible');
    }
})

signin_form && signin_form.querySelector('form').addEventListener('submit', (event) => {
    signInPress(event);
    signin_form.querySelectorAll('.auth_input').forEach((input) => {
        input.value = '';
    });
});

signup_form && signup_form.querySelector('form').addEventListener('submit', (event) => {
    signUpPress(event);
    signup_form.querySelectorAll('.auth_input').forEach((input) => {
        input.value = '';
    });
    signup_form.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
        checkbox.checked = false;
    });
});

recovery_form && recovery_form.querySelector('form').addEventListener('submit', (event) => {
    recoveryPress(event);
    recovery_form.querySelectorAll('.auth_input').forEach((input) => {
        input.value = '';
    });
});

signin_register_link && signin_register_link.addEventListener('click', signUpActiveForm);
forgot_password_link && forgot_password_link.addEventListener('click', recoveryActiveForm);

function allowScroll() {
    window.document.body.style.overflow = 'auto';
}

function signInPress(event) {
    auth_menu_drawer.classList.remove('auth_menu_drawer_active');
    allowScroll();
}

function signUpPress(event) {
    auth_menu_drawer.classList.remove('auth_menu_drawer_active');
    signInActiveForm();
    allowScroll();
}

function recoveryPress(event) {
    auth_menu_drawer.classList.remove('auth_menu_drawer_active');
    signInActiveForm();
    allowScroll();
}


// ACCORDION
let accordions = document.getElementsByClassName("accordion_header");

let hide_arrows = document.getElementsByClassName("hide_content_button");

if (hide_arrows.length) {
    for (let i = 0; i < hide_arrows.length; i++) {
        hide_arrows[i].addEventListener("click", function () {
            accordions[i].classList.remove("active_accordion");
            let content = hide_arrows[i].parentNode.parentNode.parentNode;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            }
        });
    }
}

function calcAccordionContentHeight(content) {
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

export function resizeCurrentAccordionHeight(content) {
    content.style.maxHeight = content.scrollHeight + "px";
}

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
        this.classList.toggle("active_accordion");
        let content = this.nextElementSibling;

        calcAccordionContentHeight(content);
    });
}



// PAGINATION

let pagination_list_items = document.querySelectorAll('.pagination_item');

if (pagination_list_items.length) {
    pagination_list_items.forEach((el) => {
        el.addEventListener("click", function () {
            pagination_list_items.forEach((el) => {
                el.classList.remove('active_page');
            })
            this.classList.add('active_page');
        })
    })
}

