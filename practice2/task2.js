const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const mainDiv = document.querySelector(".app");

let idProduct = 0;

initialData.forEach((element) => {
  const product = document.createElement("p");
  product.textContent += element.product;
  mainDiv.appendChild(product);

  const reviews = document.createElement("ol");
  element.reviews.forEach((element) => {
    idProduct = element.id;
    reviews.innerHTML += `<li>${element.text} (ID ${idProduct})</li>`;
  });
  mainDiv.appendChild(reviews);

  const inputText = document.createElement("input");
  mainDiv.appendChild(inputText);

  const btn = document.createElement("button");
  btn.textContent = "Отправить";
  btn.addEventListener("click", () => {
    if (inputText.value.length >= 50 && inputText.value.length <= 500) {
      idProduct++;
      reviews.innerHTML += `<li>${inputText.value} (ID ${idProduct})</li>`;
    } else {
      errorMessage.textContent =
        "Комментарий должен быть длинной не менее 50 и не более 500 символов";
    }
  });
  mainDiv.appendChild(btn);

  const errorMessage = document.createElement("p");
  errorMessage.style.color = "RED";
  mainDiv.appendChild(errorMessage);
});
