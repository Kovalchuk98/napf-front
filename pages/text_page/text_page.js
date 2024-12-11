import '../../src/styles/_reset.scss';
import '../../style.scss';
import '../../src/styles/_custom.scss';
import '../../src/styles/_common.scss';

import '../../src/styles/UI/header.scss';
import '../../src/styles/UI/accordion.scss';
import '../../src/styles/UI/breadcrumb.scss';
import '../../src/styles/UI/pagination.scss';
import '../../src/styles/UI/list.scss';
import '../../src/styles/UI/auth_menu.scss';
import '../../src/styles/UI/table.scss';
import '../../src/styles/UI/documents.scss';

import '../../src/styles/blocks/mailings.scss';
import '../../src/styles/blocks/events.scss';

import '../../src/styles/text_page/index.scss';

import '../../src/scripts/common_scripts.js';


let compactDocuments = document.querySelectorAll('.document_compact');


compactDocuments.forEach((document) => {
    let icon = document.querySelector('.document_icon');
    let link = document.querySelector('.document_link');

    link.classList.remove('block_link_filled');

    let link_icon = link.querySelector('.document_link_icon');
    let link_text = link.querySelector('p');

    link_icon && link_icon.remove();

    link_text.textContent = 'Скачать'

    icon && link.prepend(icon);
})
