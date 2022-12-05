const container = document.getElementById("container");

dataMundial.forEach(({name_en, flag, description }) => {
  let article = document.createElement("article");
  article.setAttribute("class", "card__container");
  
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  
  let presentation = document.createElement("div");
  presentation.setAttribute("class", "presentation");

  let image = document.createElement("img");
  image.setAttribute("class", "image");
  image.src = `${flag}`

  let title = document.createElement("h2");
  title.innerHTML = `${name_en}`;
  title.classList.add("selections-center", "selections__subtitle");

  let descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("presentation", "description");

  let paragraph = document.createElement("p");
  paragraph.innerHTML = `${description}`;
  paragraph.setAttribute("class", "paragraph");

  presentation.appendChild(image);
  presentation.appendChild(title);
  descriptionContainer.appendChild(paragraph);
  card.appendChild(presentation);
  card.appendChild(descriptionContainer);
  article.appendChild(card);

  container.appendChild(article)

});