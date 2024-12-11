
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

import '../../src/styles/contacts/index.scss';

import '../../src/scripts/common_scripts.js';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


let contactsAddress = document.getElementsByClassName('contacts_address_wrapper')[0];

let contacts_block = document.getElementsByClassName('contacts_block')[0];

let contacts_info = document.getElementsByClassName('contacts_info')[0];


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

window.addEventListener('resize', checkScreenWidth);
