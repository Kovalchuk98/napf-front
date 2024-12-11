import "../common_scripts/common_scripts.js";
/* empty css                       */
/* empty css                       */
/* empty css                    */
let answers = document.querySelectorAll(".expert_answer");
let screenWidth = window.innerWidth;
if (screenWidth <= 768 && answers) {
  answers.forEach((answer) => {
    if (!answer.textContent.length) {
      answer.textContent = "- - -";
    }
  });
}
