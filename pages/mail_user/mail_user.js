
import '../../src/styles/_reset.scss';
import '../../style.scss';
import '../../src/styles/_custom.scss';
import '../../src/styles/_common.scss';
import '../../src/styles/_common_personal.scss';

import '../../src/styles/UI/header.scss';
import '../../src/styles/UI/accordion.scss';
import '../../src/styles/UI/breadcrumb.scss';
import '../../src/styles/UI/documents.scss';
import '../../src/styles/UI/pagination.scss';
import '../../src/styles/UI/inputs.scss';
import '../../src/styles/UI/auth_menu.scss';
import '../../src/styles/UI/select.scss';

import '../../src/styles/personal_area/mail_user/index.scss';

import '../../src/scripts/common_scripts.js';
import '../../src/scripts/common_personal_scripts.js';

let mailDates = document.querySelectorAll('.mail_date');

mailDates.forEach((date_item) => {
  let dateTag = date_item.querySelector('span');
  let dateString = dateTag.textContent;
  if (dateString) {
    let parts = dateString.split('.');
    if (parts.length === 3) {
      let boldPart = document.createElement('b');
      boldPart.textContent = `${parts[0]}.${parts[1]}`;
      dateTag.innerHTML = '';
      dateTag.appendChild(boldPart); 
      dateTag.appendChild(document.createTextNode(`.${parts[2]}`));
    }
  }
})


export function showCompactDocuments() {
  let documents_list_item = document.querySelectorAll('.documents_list_item');
  let compactDocuments = document.querySelectorAll('.document_compact');
  let documents_list = document.querySelectorAll('.documents_list');

  if (documents_list) {
    documents_list.forEach((item) => {
      item.classList.add('documents_list_compact');
    })
  }

  documents_list_item.forEach((item) => {
    if (!item.classList.contains('document_nocompact')) {
      item.classList.add('document_compact');
    }
  })

  compactDocuments && compactDocuments.forEach((document) => {
   
    let icon = document.querySelector('.document_icon');
    let link = document.querySelector('.document_link');

    link && link.classList.remove('block_link_filled');

    // let link_icon = link.querySelector('.document_link_icon') || link.querySelector('svg');
    let link_icon = link.querySelector('.document_icon') || link.querySelector('svg');
    let link_text = link.querySelector('p');

    if (link_icon && link_text) {
      link_icon.remove();
  
      link_text.textContent = 'Скачать'
  
      link.prepend(icon);
    }
  })
}

let screenWidth = window.innerWidth;

function checkScreenWidth() {


  if (screenWidth <= 1024) {
    showCompactDocuments();
  }

  if (screenWidth <= 768) {


  }
  else {

  }
}

checkScreenWidth();

if (screenWidth <= 1024) {
  showCompactDocuments();
}

window.addEventListener('resize', checkScreenWidth);
