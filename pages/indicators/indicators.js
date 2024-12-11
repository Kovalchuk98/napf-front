
import '../../src/styles/_reset.scss';
import '../../style.scss';
import '../../src/styles/_custom.scss';
import '../../src/styles/_common.scss';

import '../../src/styles/UI/header.scss';
import '../../src/styles/UI/accordion.scss';
import '../../src/styles/UI/breadcrumb.scss';
import '../../src/styles/UI/inputs.scss';
import '../../src/styles/UI/auth_menu.scss';
import '../../src/styles/UI/select.scss';

import '../../src/styles/blocks/mailings.scss';
import '../../src/styles/blocks/events.scss';

import '../../src/styles/indicators/index.scss';

import '../../src/scripts/common_scripts.js';


let tabs = document.querySelectorAll('.indicators_tab_item');

let tableWrapper = document.querySelector('.table_wrapper');

let tableHeadRows = document.querySelectorAll('table>thead>tr');

let firstRow = tableHeadRows[0];
let secondRow = tableHeadRows[1];

[...firstRow.children, ...secondRow.children].forEach((cell) => {
  if (!cell.getAttribute('colspan')) {
    cell.addEventListener('click', (e) => {
      e.preventDefault();

      [...firstRow.children, ...secondRow.children].forEach((cell) => {
        let arrowSpan = cell.querySelector('a span');
        if (arrowSpan) {
          if (cell !== e.currentTarget) {
            arrowSpan.textContent = '↓'
          }
        }
      })

      let arrowSpan = e.currentTarget.querySelector('a span');
      if (arrowSpan) {
        let currentText = arrowSpan.textContent;
        let newText = currentText === '↓' ? '↑' : '↓';
        arrowSpan.textContent = newText;
      }
    })
  }
})

let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove('active_tab');
    })
    tab.classList.add('active_tab');
  })
});

tableWrapper.addEventListener('mousedown', (e) => {
  isDown = true;
  e.preventDefault();
  startX = e.pageX - tableWrapper.offsetLeft;
  startY = e.pageY - tableWrapper.offsetLeft;
  scrollLeft = tableWrapper.scrollLeft;
  scrollTop = tableWrapper.scrollTop;
  tableWrapper.style.cursor = 'move';
});

tableWrapper.addEventListener('mouseleave', () => {
  isDown = false;
});

tableWrapper.addEventListener('mouseup', () => {
  isDown = false;
  tableWrapper.style.cursor = 'default';
});

tableWrapper.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - tableWrapper.offsetLeft;
  const y = e.pageY - tableWrapper.scrollTop;
  const walk = (x - startX) * 2; //scroll-fast
  const walk2 = (y - startY); //scroll-fast
  tableWrapper.scrollLeft = scrollLeft - walk;
  tableWrapper.scrollTop = scrollTop - walk2;
});



// const selectSelected = document.getElementsByClassName('select_selected');

// function getQueryParam(param) {
//   const urlParams = new URL(window.location).searchParams;
//   return urlParams.get(param);
// }

// const year = getQueryParam('year');
// const date = getQueryParam('date');

// if (year) {
//   selectSelected[0].textContent = year;
// }
// if (date) {
//   selectSelected[1].textContent = date;
// }

// const config = { attributes: true, childList: true, subtree: true };

// const callback = function (mutationsList, observer) {
//   for (const mutation of mutationsList) {
//     if (mutation.type === 'childList') {
//       if (mutation.target == selectSelected[0]) {
//         let selectedYear = selectSelected[0].textContent;
//         let currentUrl = window.location.href;
//         let newUrl = new URL(currentUrl);
//         newUrl.searchParams.set('year', selectedYear);
//         window.location.href = newUrl.href;

//       } else if (mutation.target == selectSelected[1]) {
//         let selectedDate = selectSelected[1].textContent;
//         let currentUrl = window.location.href;
//         let newUrl = new URL(currentUrl);
//         newUrl.searchParams.set('date', selectedDate);
//         window.location.href = newUrl.href;
//       }
//     }
//   }
// };

// const observer = new MutationObserver(callback);

// for (let i = 0; i < selectSelected.length; i++) {
//   observer.observe(selectSelected[i], config);
// }



function checkScreenWidth() {

  let screenWidth = window.innerWidth;

  if (screenWidth <= 768) {


  }
  else {

  }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);
