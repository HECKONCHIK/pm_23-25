const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const arrows = document.querySelectorAll(".arrow");

const name = 'GARY T.';
const surname = 'WALTON'

firstName.textContent = name;
lastName.textContent = surname;

// 2. Перебираємо кожну стрілку окремо
arrows.forEach(function(arrow) {

  arrow.addEventListener("click", function() {

    const mainContainer = this.parentElement.parentElement;

    const content = mainContainer.querySelector(".content");

    if (content.style.visibility === "hidden" || content.style.visibility === "") {
      content.style.visibility = "visible";
      this.style.transform = "rotate(0deg)";
    } else {
      content.style.visibility = "hidden";
      this.style.transform = "rotate(90deg)";
    }
  });
});
