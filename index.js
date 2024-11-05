const data = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    img: "icon-supervisor",
    border: "hsl(180, 62%, 55%)",
  },
  {
    title: "Team Builder",
    description: "Scans our talent network to create the optimal team for your project",
    img: "icon-team-builder",
    border: "hsl(0, 78%, 62%)",
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    img: "icon-karma",
    border: "hsl(34, 97%, 64%)",
  },
  {
    title: "Calculator",
    description: "Uses data from past projects to provide better delivery estimates",
    img: "icon-calculator",
    border: "hsl(212, 86%, 64%)",
  },
];

const featureCardSection = document.querySelector(".card-feature");

const createCard = ({ title, description, img, border }, index) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.borderTop = `4px solid ${border}`;

  const titleElement = document.createElement("h1");
  titleElement.classList.add("title");
  titleElement.textContent = title;
  card.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.classList.add("info");
  descriptionElement.textContent = description;
  card.appendChild(descriptionElement);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");

  const imgElement = document.createElement("img");
  imgElement.src = `./images/${img}.svg`;
  imgElement.alt = img;

  imgContainer.appendChild(imgElement);
  card.appendChild(imgContainer);

  if (index === 0 || index === 3) {
    card.style.gridRow = "1/3";
    card.style.alignSelf = "center";
  }
  if (index === 3) {
    card.style.gridColumnStart = 3;
  } else if (index === 2 || index === 1) {
    card.style.gridColumnStart = 2;
  }

  return card;
};

const fragment = document.createDocumentFragment();
data.forEach((item, index) => {
  const card = createCard(item, index);
  fragment.appendChild(card);
});

featureCardSection.appendChild(fragment);
