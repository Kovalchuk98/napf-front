
import './src/styles/_reset.scss';
import './index.scss';
import './style.scss';
import './src/styles/_custom.scss';

import './src/styles/_common.scss';

import './src/styles/slider.scss';
import './src/styles/UI/auth_menu.scss';
import './src/styles/UI/inputs.scss';
import './src/styles/blocks/events.scss';
import './src/styles/blocks/mailings.scss';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


import './src/scripts/common_scripts.js';
import './src/scripts/home_slider.js';


let events_block = document.getElementsByClassName('events_block')[0];


$('.videos_block_items').owlCarousel({
    loop: false,
    margin: 40,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        750: {
            items: 2,
            nav: false,
            dots: true,
        },
        1200: {
            items: 3,
            nav: false,
            dots: true,
            mouseDrag: false,
            touchDrag: false,
        },
    }
})

$('.partners_block_items').owlCarousel({
    loop: true,
    margin: 40,
    responsiveClass: true,
    autoplay: true,
    autoplay: false,
    nav: true,
    dots: false,
    autoplayTimeout: 3000,
    navText: [
        '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M20 40C8.95431 40 0 31.0457 0 20C0 8.9543 8.95431 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40ZM22.9703 9.28242C23.3666 8.89777 23.9997 8.90722 24.3843 9.30352C24.769 9.69983 24.7595 10.3329 24.3632 10.7176L14.7995 20L24.3632 29.2824C24.7595 29.6671 24.769 30.3002 24.3843 30.6965C23.9997 31.0928 23.3666 31.1022 22.9703 30.7176L12.6672 20.7176C12.4732 20.5293 12.3637 20.2704 12.3637 20C12.3637 19.7296 12.4732 19.4707 12.6672 19.2824L22.9703 9.28242Z" fill="#2D424D"/></svg>', '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM17.03 9.28242C16.6337 8.89777 16.0006 8.90722 15.6159 9.30352C15.2313 9.69983 15.2407 10.3329 15.637 10.7176L25.2007 20L15.637 29.2824C15.2407 29.6671 15.2313 30.3002 15.6159 30.6965C16.0006 31.0928 16.6337 31.1022 17.03 30.7176L27.333 20.7176C27.527 20.5293 27.6365 20.2704 27.6365 20C27.6365 19.7296 27.527 19.4707 27.333 19.2824L17.03 9.28242Z" fill="#2D424D"/></svg>'
    ],
    responsive: {
        0: {
            items: 1,
            mouseDrag: true,
            touchDrag: true,
        },
        650: {
            items: 2,
            mouseDrag: true,
            touchDrag: true,
        },
        800: {
            items: 3,
            mouseDrag: true,
            touchDrag: true,
        },
        1024: {
            items: 4,
            mouseDrag: false,
            touchDrag: false,
        },
        1200: {
            items: 6,
            mouseDrag: false,
            touchDrag: false,
        }
    }
})

function checkScreenWidth() {

    let screenWidth = window.innerWidth;

    let news_sliders = document.querySelectorAll('.news_slider');

    let content_wrapper = document.querySelector('.content_wrapper');

    let review_news_link = document.querySelector('.review_news_link');

    // Change Subscribe Button Text
    if (screenWidth <= 1539) {
       document.getElementsByClassName('subscribe_button')[0].children[1].textContent = 'Подписка';
        // review_news_link.classList.add('active_review_link');
    } else {
        document.getElementsByClassName('subscribe_button')[0].children[1].textContent = 'Подписка на оповещения';
        // review_news_link.classList.remove('active_review_link');
    }

    // Change Review News Link position
    if (screenWidth <= 991) { 
        review_news_link.classList.add('order-5')
        content_wrapper.appendChild(review_news_link)
    } else {
        review_news_link.classList.remove('order-5')
        events_block.appendChild(review_news_link)
    }

    // Activate News Sliders
    if (screenWidth <= 768) {
            news_sliders.forEach((el) => {
                el.classList.add('owl-carousel', 'owl-theme')
            })
            $('.news_slider').owlCarousel({
                loop: false,
                margin: 40,
                responsiveClass: true,
                autoplay: false,
                autoplayTimeout: 3000,
                dots: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                    }
                }
            })
        }
        else {
            news_sliders.forEach((el) => {
                el.classList.remove('owl-carousel','owl-theme')
            })
            jQuery('.news_slider').owlCarousel('destroy');
    }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);




