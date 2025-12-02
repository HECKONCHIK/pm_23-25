const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const arrows = document.querySelectorAll(".arrow");

const name = 'GARY T.';
const surname = 'WALTON'

firstName.textContent = name;
lastName.textContent = surname;

arrows.forEach(function(arrow) {
  arrow.addEventListener("click", function() {

    const mainContainer = this.parentElement.parentElement;
    const contents = mainContainer.querySelector(".contents");

    if (!contents) return;

    // Якщо приховано -> показуємо і крутимо стрілку
    if (contents.style.visibility === "hidden") {
      contents.style.visibility = "visible";
      this.classList.add("active");
    }
    // У всіх інших випадках (в т.ч. перший клік, якщо було visible) -> ховаємо і вертаємо стрілку
    else {
      contents.style.visibility = "hidden";
      this.classList.remove("active");
    }
  });
});

