import { f as flatpickr, r as ruExports } from "../ru/ru.js";
import "../jquery/jquery.js";
import "../common_scripts/common_scripts.js";
import "../common_personal_scripts/common_personal_scripts.js";
/* empty css                       */
/* empty css                     */
/* empty css                       */
/* empty css               */
/* empty css               */
/* empty css          */
/* empty css              */
let tabs = document.querySelectorAll(".mailings_tabs_item");
let tags = document.querySelectorAll(".tag_tab");
let tagsMenuLink = document.querySelectorAll(".tags_menu_link");
let acceptButton = document.querySelector(".accept_button");
let select_top_wrapper = document.querySelectorAll(".mailings_top_wrapper ");
let mailing_dates = document.querySelectorAll(".mailings_date");
let mailingsRecipients = document.getElementsByClassName("mailings_recipients")[0];
let selectWrapper = document.getElementsByClassName("mailings_recipients_select_wrapper")[0];
let moreTagsButtons = document.querySelectorAll(".more_tags");
let searchInput = document.getElementsByClassName("search_input")[0].querySelector("input");
let mailingsFilterDate = document.querySelector(".mailings_filter_date");
let flatpicker = document.querySelector(".filter_dates");
let tagsArray = ["#Члены НАПФ", "#Актуарный комитет", "#Рабочая группа по ПОД/ФТ", "#Члены совета", "#Руководство НПФ"];
let tags_text = document.querySelector(".tags_text");
let dateText = document.querySelectorAll(".date_text");
mailingsRecipients.querySelector("p").textContent = tagsArray.join(", ");
tags_text.textContent = tagsArray.join(", ");
flatpickr(flatpicker, {
  mode: "range",
  locale: ruExports.Russian,
  dateFormat: "d.m.Y",
  nextArrow: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00163 0.71811C9.37537 0.32692 10 0.32692 10.3738 0.71811C10.7242 1.08485 10.7242 1.6623 10.3738 2.02904L5.62459 7L10.3738 11.971C10.7242 12.3377 10.7242 12.9152 10.3738 13.2819C10 13.6731 9.37537 13.6731 9.00163 13.2819L3 7L9.00163 0.71811Z" fill="#5979C4"/></svg>',
  prevArrow: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00163 0.71811C9.37537 0.32692 10 0.32692 10.3738 0.71811C10.7242 1.08485 10.7242 1.6623 10.3738 2.02904L5.62459 7L10.3738 11.971C10.7242 12.3377 10.7242 12.9152 10.3738 13.2819C10 13.6731 9.37537 13.6731 9.00163 13.2819L3 7L9.00163 0.71811Z" fill="#5979C4"/></svg>',
  onValueUpdate: function(selectedDates, dateStr, instance) {
    flatpicker.setAttribute("data-value", dateStr);
    let dates = dateStr.split(" — ");
    dateText.forEach((item, index) => {
      item.textContent = dates[index];
    });
  }
});
function setTextContent() {
  if (tagsArray.length) {
    tags_text.textContent = tagsArray.join(", ");
  } else {
    tags_text.textContent = `Выбрать получателей`;
  }
}
function calcCounterTags() {
  const [counterHidden, isClamped] = isTextOverflowing(tags_text);
  let counterSpan = moreTagsButtons[0].querySelector("span");
  counterSpan.textContent = `Ещё ${counterHidden}`;
}
calcCounterTags();
function isTextOverflowing(element) {
  const currentHeight = element.clientHeight;
  const style = window.getComputedStyle(element);
  const clone = element.cloneNode(true);
  clone.style.visibility = "hidden";
  clone.style.width = style.width;
  clone.style.height = style.height;
  clone.style.overflow = "hidden";
  clone.style.whiteSpace = "nowrap";
  const cloneCheck = element.cloneNode(true);
  cloneCheck.style.webkitLineClamp = "none";
  cloneCheck.style.display = "block";
  cloneCheck.style.overflow = "visible";
  cloneCheck.style.height = "auto";
  cloneCheck.style.visibility = "visible";
  element.parentNode.appendChild(cloneCheck);
  const fullHeight = cloneCheck.clientHeight;
  element.parentNode.removeChild(cloneCheck);
  const isClamped = fullHeight > currentHeight;
  element.parentNode.appendChild(clone);
  const fullText = element.textContent || element.innerText;
  clone.textContent = "";
  for (let i = 0; i < fullText.length; i++) {
    clone.textContent += fullText[i];
    if (clone.scrollWidth > clone.offsetWidth) {
      clone.textContent = clone.textContent.slice(0, -1);
      break;
    }
  }
  const visibleText = clone.textContent;
  const counterFull = fullText.split("#").length - 1;
  const counterFirstLine = visibleText.split("#").length - 1;
  let counterHidden = counterFull - counterFirstLine;
  element.parentNode.removeChild(clone);
  return [counterHidden, isClamped];
}
moreTagsButtons.forEach((button, index) => {
  let tagsList = button.previousElementSibling;
  const [counterHidden, isClamped] = isTextOverflowing(tagsList);
  if (!isClamped && index > 0) {
    button.style.display = "none";
  }
  let counterSpan = button.querySelector("span");
  counterSpan.textContent = `Ещё ${counterHidden}`;
  button.addEventListener("click", (event) => {
    if (!button.className.includes("active_more_button") && index > 0) {
      button.classList.add("active_more_button");
      tagsList.style.display = "block";
      tagsList.style.overflow = "visible";
    } else {
      button.classList.remove("active_more_button");
      tagsList.style.display = "-webkit-box";
      tagsList.style.overflow = "hidden";
    }
  });
});
acceptButton.addEventListener("click", (event) => {
  if (select_top_wrapper[0].className.includes("active_wrapper")) {
    select_top_wrapper[0].classList.remove("active_wrapper");
  }
});
tagsMenuLink[0].addEventListener("click", (event) => {
  if (!select_top_wrapper[0].className.includes("active_wrapper")) {
    select_top_wrapper[0].classList.add("active_wrapper");
  }
});
mailing_dates.forEach((date_item) => {
  let dateTag = date_item.querySelector("p");
  let dateString = dateTag.textContent;
  if (dateString) {
    let parts = dateString.split(".");
    if (parts.length === 3) {
      let boldPart = document.createElement("b");
      boldPart.textContent = `${parts[0]}.${parts[1]}`;
      dateTag.innerHTML = "";
      dateTag.appendChild(boldPart);
      dateTag.appendChild(document.createTextNode(`.${parts[2]}`));
    }
  }
});
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab2) => {
      tab2.classList.remove("active_tab");
    });
    tab.classList.add("active_tab");
  });
});
tags.forEach((tag) => {
  let currentTag = tag.querySelector("p").textContent;
  if (tagsArray.find((tagItem) => tagItem == `#${currentTag}`)) {
    tag.classList.add("active_tab");
    tag.querySelector("img").setAttribute("src", "../../icons/close_tag.svg");
  }
  tag.addEventListener("click", (e) => {
    if (tag.classList.contains("active_tab")) {
      tag.classList.remove("active_tab");
      tag.querySelector("img").setAttribute("src", "../../icons/hashtag.svg");
      tagsArray = tagsArray.filter((tag2) => tag2 !== `#${currentTag}`);
      mailingsRecipients.querySelector("p").textContent = tagsArray.join(", ");
      setTextContent();
      calcCounterTags();
    } else {
      tag.classList.add("active_tab");
      tag.querySelector("img").setAttribute("src", "../../icons/close_tag.svg");
      tagsArray.push(`#${currentTag}`);
      mailingsRecipients.querySelector("p").textContent = tagsArray.join(", ");
      setTextContent();
      calcCounterTags();
    }
  });
});
function checkScreenWidth() {
  let screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    mailingsFilterDate.querySelector("h4").textContent = "Сортировка:";
    tagsMenuLink[0].querySelector(".tags_text").textContent = "По получателям";
    if (acceptButton) {
      selectWrapper && selectWrapper.appendChild(acceptButton);
    }
    if (dateText[0].textContent === "Укажите даты") {
      dateText[0].textContent = "По дате";
      dateText[0].classList.add("mobile_placeholder");
      dateText[1].classList.add("mobile_placeholder");
    }
    tabs.forEach((tab) => {
      let tabTitle = tab.querySelector("p");
      if (tabTitle.textContent === "Все рассылки") {
        tabTitle.textContent = "Все";
      }
      if (tabTitle.textContent === "Активные рассылки") {
        tabTitle.textContent = "Активные";
      }
    });
    searchInput.placeholder = "Введите поисковый запрос";
  } else {
    mailingsRecipients && mailingsRecipients.appendChild(acceptButton);
    tagsMenuLink[0].querySelector(".tags_text").textContent = tagsArray.join(", ");
    mailingsFilterDate.querySelector("h4").textContent = "Дата отправки:";
    if (dateText[0].textContent === "По дате") {
      dateText[0].textContent = "Укажите даты";
      dateText[0].classList.remove("mobile_placeholder");
    }
    tabs.forEach((tab) => {
      let tabTitle = tab.querySelector("p");
      if (tabTitle.textContent === "Все") {
        tabTitle.textContent = "Все рассылки";
      }
      if (tabTitle.textContent === "Активные") {
        tabTitle.textContent = "Активные рассылки";
      }
    });
    setTextContent();
    searchInput.placeholder = "Введите поисковый запрос, например: «6601-У»";
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);
