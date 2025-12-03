const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const arrows = document.querySelectorAll(".arrow");
const expList = document.querySelector(".experience-list");

const name = 'GARY T.';
const surname = 'WALTON'

firstName.textContent = name;
lastName.textContent = surname;

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


const work = [
  {
    comp: 'Creative Agency',
    loc: 'Chicago',
    pos: 'SENIOR WEB DESIGNER',
    date: '2021 - Present',
    desc: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    comp: 'Creative Market',
    loc: 'United Kingdom',
    pos: 'GRAPHIC DESIGNER',
    date: '2018 - 2021',
    desc: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    comp: 'Marketing Agency',
    loc: 'United Kingdom',
    pos: 'MARKETING MANAGER',
    date: '2015 - 2018',
    desc: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  },
  {
    comp: 'Creative Market',
    loc: 'Chicago',
    pos: 'JUNIOR WEB DESIGNER',
    date: '2013 - 2015',
    desc: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  }
];

let listHTML = '';

work.forEach(function(job) {
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