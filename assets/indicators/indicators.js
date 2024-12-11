import "../common_scripts/common_scripts.js";
/* empty css                       */
/* empty css                     */
/* empty css               */
/* empty css               */
/* empty css                    */
/* empty css              */
let tabs = document.querySelectorAll(".indicators_tab_item");
let tableWrapper = document.querySelector(".table_wrapper");
let tableHeadRows = document.querySelectorAll("table>thead>tr");
let firstRow = tableHeadRows[0];
let secondRow = tableHeadRows[1];
[...firstRow.children, ...secondRow.children].forEach((cell) => {
  if (!cell.getAttribute("colspan")) {
    cell.addEventListener("click", (e) => {
      e.preventDefault();
      [...firstRow.children, ...secondRow.children].forEach((cell2) => {
        let arrowSpan2 = cell2.querySelector("a span");
        if (arrowSpan2) {
          if (cell2 !== e.currentTarget) {
            arrowSpan2.textContent = "↓";
          }
        }
      });
      let arrowSpan = e.currentTarget.querySelector("a span");
      if (arrowSpan) {
        let currentText = arrowSpan.textContent;
        let newText = currentText === "↓" ? "↑" : "↓";
        arrowSpan.textContent = newText;
      }
    });
  }
});
let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab2) => {
      tab2.classList.remove("active_tab");
    });
    tab.classList.add("active_tab");
  });
});
tableWrapper.addEventListener("mousedown", (e) => {
  isDown = true;
  e.preventDefault();
  startX = e.pageX - tableWrapper.offsetLeft;
  startY = e.pageY - tableWrapper.offsetLeft;
  scrollLeft = tableWrapper.scrollLeft;
  scrollTop = tableWrapper.scrollTop;
  tableWrapper.style.cursor = "move";
});
tableWrapper.addEventListener("mouseleave", () => {
  isDown = false;
});
tableWrapper.addEventListener("mouseup", () => {
  isDown = false;
  tableWrapper.style.cursor = "default";
});
tableWrapper.addEventListener("mousemove", (e) => {
  if (!isDown)
    return;
  e.preventDefault();
  const x = e.pageX - tableWrapper.offsetLeft;
  const y = e.pageY - tableWrapper.scrollTop;
  const walk = (x - startX) * 2;
  const walk2 = y - startY;
  tableWrapper.scrollLeft = scrollLeft - walk;
  tableWrapper.scrollTop = scrollTop - walk2;
});
function checkScreenWidth() {
}
window.addEventListener("resize", checkScreenWidth);
