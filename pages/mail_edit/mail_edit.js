import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import { Russian } from "flatpickr/dist/l10n/ru.js"

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
import '../../src/styles/UI/table.scss';
import '../../src/styles/UI/list.scss';

import '../../src/styles/personal_area/mail_edit/index.scss';

import '../../src/scripts/common_scripts.js';
import '../../src/scripts/common_personal_scripts.js';

import '../../src/scripts/ru.js';
import tinymce from "tinymce";


// import * as tinyContentInstance from "../../src/scripts/globalTinyContent.js";

let tags = document.querySelectorAll('.tag_tab');
let tagsMenuLink = document.querySelectorAll('.tags_menu_link');
let acceptButton = document.querySelector('.accept_button');
let mailEditWrapper = document.querySelectorAll('.mail_edit_wrapper');

let controlDate = document.querySelector('.control_date_input');

let mailingsRecipients = document.getElementsByClassName('mailings_recipients')[0];
let selectWrapper = document.getElementsByClassName('mailings_recipients_select_wrapper')[0];

let tags_text = document.querySelector('.tags_text');

let tagsArray = ['#Члены НАПФ', '#Актуарный комитет', '#Рабочая группа по ПОД/ФТ', '#Члены совета', '#Руководство НПФ',];

let moreTagsButton = document.querySelector('.more_tags');

mailingsRecipients.querySelector('p').textContent = tagsArray.join(', ');
tags_text.textContent = tagsArray.join(', ');

let counterInitTags = tagsArray.length;


let tagsList = moreTagsButton.previousElementSibling;

function calcCounterTags() {

  const [counterHidden, isClamped] = isTextOverflowing(tags_text);

  // if (!isClamped) {
  //   moreTagsButton.style.display = 'none';
  // }

  let counterSpan = moreTagsButton.querySelector('span');

  counterSpan.textContent = `Ещё ${counterHidden}`
}

calcCounterTags();


acceptButton.addEventListener('click', (event) => {
  if (mailEditWrapper[0].className.includes('active_wrapper')) {
    mailEditWrapper[0].classList.remove('active_wrapper');
    moreTagsButton.classList.remove('active_more_button')
    tagsList.style.display = '-webkit-box';
    tagsList.style.overflow = 'hidden';
  }
})

tagsMenuLink[0].addEventListener('click', (event) => {
  event.preventDefault();
  if (!mailEditWrapper[0].className.includes('active_wrapper')) {
    mailEditWrapper[0].classList.add('active_wrapper');
  }
})

function setTextContent() {
  if (tagsArray.length) {
    tags_text.textContent = tagsArray.join(', ');
  } else {
    tags_text.textContent = `Выбрать получателей`;
  }
}


tags.forEach((tag) => {
  let currentTag = tag.querySelector('p').textContent;

  if (tagsArray.find(tagItem => tagItem == `#${currentTag}`)) {
    tag.classList.add('active_tab');
    tag.querySelector('img').setAttribute('src', '../../icons/close_tag.svg');
  }

  tag.addEventListener('click', (e) => {
    if (tag.classList.contains('active_tab')) {
      tag.classList.remove('active_tab');
      tag.querySelector('img').setAttribute('src', '../../icons/hashtag.svg');
      tagsArray = tagsArray.filter((tag) => tag !== `#${currentTag}`);
      mailingsRecipients.querySelector('p').textContent = tagsArray.join(', ');
      setTextContent();
      calcCounterTags();

    } else {
      tag.classList.add('active_tab');
      tag.querySelector('img').setAttribute('src', '../../icons/close_tag.svg');
      tagsArray.push(`#${currentTag}`);

      mailingsRecipients.querySelector('p').textContent = tagsArray.join(', ');
      setTextContent();
      calcCounterTags();
    }
  });
});


function isTextOverflowing(element) {

  const currentHeight = element.clientHeight;

  const style = window.getComputedStyle(element);
  const clone = element.cloneNode(true);
  clone.style.visibility = 'hidden';
  clone.style.width = style.width;
  clone.style.height = style.height;
  clone.style.overflow = 'hidden';
  clone.style.whiteSpace = 'nowrap';

  console.log(clone);
  

  const cloneCheck = element.cloneNode(true);
  cloneCheck.style.webkitLineClamp = 'none';
  cloneCheck.style.display = 'block';
  cloneCheck.style.overflow = 'visible';
  cloneCheck.style.height = 'auto';
  cloneCheck.style.visibility = 'visible';

  element.parentNode.appendChild(cloneCheck);
  const fullHeight = cloneCheck.clientHeight;
  element.parentNode.removeChild(cloneCheck);
  
  const isClamped = fullHeight > currentHeight;

  element.parentNode.appendChild(clone);

  const fullText = element.textContent || element.innerText;
  clone.textContent = '';

  for (let i = 0; i < fullText.length; i++) {
    clone.textContent += fullText[i];
    if (clone.scrollWidth > clone.offsetWidth) {
      clone.textContent = clone.textContent.slice(0, -1);
      break;
    }
  }

  const visibleText = clone.textContent;

  const counterFull = (fullText.split("#").length - 1)

  const counterFirstLine = (visibleText.split("#").length - 1)

  let counterHidden = counterFull - counterFirstLine;

  element.parentNode.removeChild(clone);

  return [counterHidden, isClamped];

}


let controlDateIcon = document.querySelector('.control_date_input').previousElementSibling;

controlDate.addEventListener('change', function (e) {
  if (controlDate.value && controlDateIcon.nodeName == 'IMG') {
    controlDateIcon.setAttribute('src', '../../icons/bell.svg');
  } else {
    controlDateIcon.setAttribute('src', '../../icons/bell_x.svg');
  }
})

let flatpickerControl = document.querySelector('.control_date_input');

let flatPickerPublish = document.querySelector('.publish_date_input');

// Content from TinyMCE
// let tinymceContent = null;

tinymce.init({
  selector: '#mytextarea',
  height: 500,
  language_url: '../../src/scripts/ru.js',
  language: 'ru',
  browser_spellcheck: true,
  menubar: false,
  license_key: 'gpl',
  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker code',
  toolbar: '| bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | numlist bullist | indent outdent blockquote | subscript superscript | blocks fontfamily fontsize | undo redo | link image media table | code addcomment showcomments | spellcheckdialog a11ycheck | lineheight | emoticons charmap language | removeformat',
  content_style: 'body { font-family:Roboto,Arial,sans-serif; font-size:18px; }',
  // content_css: "https://napf.galior.com/assets/table/table.css"
  content_css: ['../../src/styles/UI/list.scss', '../../src/styles/UI/table.scss'],
  setup: function (editor) {
    editor.on('change', function (e) {

      let content = e.target.getContent();
      window.tinyContentInstance.setContent(content);

      document.querySelector('#mytextarea').innerHTML = window.tinyContentInstance.getContent();
    });
  }
});

flatpickr(flatpickerControl, {
  mode: 'single',
  locale: Russian,
  dateFormat: 'd.m.Y',
  nextArrow: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00163 0.71811C9.37537 0.32692 10 0.32692 10.3738 0.71811C10.7242 1.08485 10.7242 1.6623 10.3738 2.02904L5.62459 7L10.3738 11.971C10.7242 12.3377 10.7242 12.9152 10.3738 13.2819C10 13.6731 9.37537 13.6731 9.00163 13.2819L3 7L9.00163 0.71811Z" fill="#5979C4"/></svg>',
  prevArrow: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00163 0.71811C9.37537 0.32692 10 0.32692 10.3738 0.71811C10.7242 1.08485 10.7242 1.6623 10.3738 2.02904L5.62459 7L10.3738 11.971C10.7242 12.3377 10.7242 12.9152 10.3738 13.2819C10 13.6731 9.37537 13.6731 9.00163 13.2819L3 7L9.00163 0.71811Z" fill="#5979C4"/></svg>',
  onValueUpdate: function (selectedDates, dateStr, instance) {
    flatpickerControl.setAttribute('data-value', dateStr);
  },
});

flatpickr(flatPickerPublish, {
  mode: 'single',
  locale: Russian,
  dateFormat: 'd.m.Y',
  nextArrow: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00163 0.71811C9.37537 0.32692 10 0.32692 10.3738 0.71811C10.7242 1.08485 10.7242 1.6623 10.3738 2.02904L5.62459 7L10.3738 11.971C10.7242 12.3377 10.7242 12.9152 10.3738 13.2819C10 13.6731 9.37537 13.6731 9.00163 13.2819L3 7L9.00163 0.71811Z" fill="#5979C4"/></svg>',
  prevArrow: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00163 0.71811C9.37537 0.32692 10 0.32692 10.3738 0.71811C10.7242 1.08485 10.7242 1.6623 10.3738 2.02904L5.62459 7L10.3738 11.971C10.7242 12.3377 10.7242 12.9152 10.3738 13.2819C10 13.6731 9.37537 13.6731 9.00163 13.2819L3 7L9.00163 0.71811Z" fill="#5979C4"/></svg>',
  onValueUpdate: function (selectedDates, dateStr, instance) {
    flatPickerPublish.setAttribute('data-value', dateStr);
  },
});


function checkScreenWidth() {

  let screenWidth = window.innerWidth;
  if (screenWidth <= 767) {
    if (acceptButton) {
      selectWrapper && selectWrapper.appendChild(acceptButton)
    }
    tagsMenuLink[0].querySelector('.tags_text').textContent = `Выбрать получателей (${counterInitTags})`

  } else {
    mailingsRecipients && mailingsRecipients.appendChild(acceptButton);
    setTextContent();
  }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);
