import '../../src/styles/_reset.scss';
import '../../style.scss';
import '../../src/styles/_custom.scss';

import '../../src/styles/_common.scss';
import '../../src/styles/UI/header.scss';
import '../../src/styles/UI/breadcrumb.scss';
import '../../src/styles/UI/pagination.scss';
import '../../src/styles/UI/auth_menu.scss';

import '../../src/styles/blocks/mailings.scss';
import '../../src/styles/blocks/events.scss';


import '../../src/styles/expert/index.scss';

import '../../src/scripts/common_scripts.js';


let answers = document.querySelectorAll('.expert_answer');

let screenWidth = window.innerWidth;

if (screenWidth <= 768 && answers) {

    answers.forEach((answer) => {
        if (!answer.textContent.length) {
            answer.textContent = '- - -';
        }
    })
}

