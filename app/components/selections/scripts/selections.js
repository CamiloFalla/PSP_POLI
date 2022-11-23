const container = document.getElementById("container");

fetch('../api/selections-data.json', {
  mode: "no-cors",
})
  .then(response => response.json())
  .then(data => dataMundial = data)
  .catch(error => console.log(error));

dataMundial.forEach((element) => {

  let article = document.createElement("article");
  article.setAttribute("class", "card__container");
  
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  
  let presentation = document.createElement("div");
  presentation.setAttribute("class", "presentation");

  let image = document.createElement("img");
  image.src = `${element.image}`

  let title = document.createElement("h2");
  paragraph.innerHTML = `${element.title}`;
  title.setAttribute("class", "selections-center");
  title.setAttribute("class", "selections__subtitle");

  let description = document.createElement("div");
  description.setAttribute("class", "presentation");
  description.setAttribute("class", "description");

  let paragraph = document.createElement("h2");
  paragraph.innerHTML = `${element.description}`;
  
  presentation.appendChild(image);
  presentation.appendChild(title);
  description.appendChild(paragraph);
  card.appendChild(presentation);
  card.appendChild(description);
  article.appendChild(card);

  container.appendChild(article)

});