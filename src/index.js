// console.log("%c HI", "color: blue");

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const divImageContainer = document.querySelector("#dog-image-container");
  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);

      for (const picture of data.message) {
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        img.setAttribute("width", "200px");
        img.setAttribute("height", "200px");
        img.setAttribute("border-radius", "30px");
        img.style.margin = "5px";
        img.style.borderRadius = "5px";
        divImageContainer.appendChild(img);
        // console.log(img);
      }
    });

  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);

      //   console.log(Object.keys(data.message));

      const ul = document.querySelector("#dog-breeds");
      //   console.log(Object.keys(data.message).filter(name => name[0] === 'a'));
      //   console.log(Object.keys(data.message).filter(name => name[0] === 'b'));
      //   console.log(Object.keys(data.message).filter(name => name[0] === 'c'));
      //   console.log(Object.keys(data.message).filter((name) => name[0] === "d"));
      for (const dogName of Object.keys(data.message)) {
        let li = document.createElement("li");

        li.addEventListener("click", () => {
          li.style.color = "red";
        });

        li.textContent = dogName;
        ul.appendChild(li);
      }
    });
});
