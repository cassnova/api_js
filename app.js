const url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories";
let $container = document.getElementById("container_cards");
let fragment = document.createDocumentFragment();

function getCards() {
  fetch(url)
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((json) => {
      // console.log(json);
      console.log(json.communityCategories);
      json.communityCategories.forEach((e) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <div class="card__img">
          <img src="${
            e.background ||
            "https://storage.googleapis.com/bucket-larnu/media/business/142/images/2P6FENBB.png"
          }" alt="${e.name}" class="card__img-bg">
          <img src="${e.icon}" alt="${e.name}" class="card__img-icon">
        </div>
        <div class="card__text">
          <h2 class='card__h2'>${e.name}</h2>
          <p class='card__text-p'>Total Quizzes: ${e.totalQuizzes}</p>
          <p class='card__text-p'>Users: ${e.users}</p>
          <a href="https://larnu.app/#/intro" target='_blank' class='btn'>Go to LarnU</a>
        </div>
        `;
        fragment.appendChild(div);
      });
      $container.appendChild(fragment);
    });
}
getCards();

/*
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    console.log(body);
    for (let i = 0; i <= 10; i++) {
      const element = body[i];
      console.log(element.id);
    }
  })
  .catch((err) => {
    console.log(err);
  });
*/
