const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    if (entry.isIntersecting) observer.unobserve(entry.target);
  });
}, {});

cards.forEach((card) => {
  observer.observe(card);
});

const loadNewCards = () => {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "This is New Card";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
};

const lastCardObserver = new IntersectionObserver(
  (entries) => {
    const [lastCard] = entries;
    if (!lastCard.isIntersecting) return;
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector(".card:last-child"));
  },
  {
    threshold: 1
  }
);

lastCardObserver.observe(document.querySelector(".card:last-child"));
