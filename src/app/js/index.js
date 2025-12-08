const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const expList = document.querySelector(".experience-list");
const arrows = document.querySelectorAll(".arrow");

// const name = 'GARY T.';
// const surname = 'WALTON'
//
// firstName.textContent = name;
// lastName.textContent = surname;

arrows.forEach(function(arrow) {
  arrow.addEventListener("click", function() {

    const mainContainer = this.parentElement.parentElement;
    const contents = mainContainer.querySelector(".contents");

    if (!contents) return;

    if (contents.style.visibility === "hidden") {
      contents.style.visibility = "visible";
      contents.style.display = "block";
      this.classList.add("active");
    }
    else {
      contents.style.visibility = "hidden";
      contents.style.display = "none";
      this.classList.remove("active");
    }
  });
});

const getName = async() => {

  try {
    const response = await fetch("/name.json")

    if (!response.ok) {
      throw new Error(`file not found: ${response.status}`)
    }

    const data = await response.json()

    firstName.textContent = data.firstName;
    lastName.textContent = data.secondName;

  } catch (err) {
    console.log("Помилка:", err);
  }
}
  const getJob = async() => {
    try {
      const response = await fetch("/jobs.json")

      if (!response.ok) {
        throw new Error(`file not found: ${response.status}`)
      }

      const data = await response.json();

      doList(data);

      console.log(data);

    } catch (err) {
      console.log("Помилка:", err)
    }
  }

  const doList = async(jobs) => {
    let listHTML = '';

    jobs.forEach(function(job) {
      listHTML += `
    <li class="experience-item">
      <span class="decorator"></span>
      <div class="content">
        <div class="header-line">
          <div class="title-location fst-italic">
            <h3 class="company">${job.comp}</h3>
            <p class="location">${job.loc}</p>
          </div>
          <span class="date">${job.date}</span>
        </div>
        <h4 class="position">${job.pos}</h4>
        <p class="description">
          ${job.desc}
        </p>
      </div>
   </li>
  `;
    })

// console.log(listHTML);

    expList.innerHTML = listHTML;
  }

  getName();
  getJob();
