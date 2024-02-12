"use strict";

// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.

// Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// Для создания элементов интерфейса используйте HTML.
// При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

const images = [
  {
    id: 0,
    src: "https://avatars.mds.yandex.net/i?id=ae844aa0d66bf97c426d0c3e183d6c0bc76c0f2e-10414886-images-thumbs&n=13",
  },
  {
    id: 1,
    src: "https://pic.rutubelist.ru/video/13/96/13963b9753d09563cd67b5c169bb69f0.jpg",
  },
  {
    id: 2,
    src: "https://secondopinions.ru/storage/blog/posts/10/IMG_2358.JPG",
  },
  {
    id: 3,
    src: "https://top7travel.ru/wp-content/uploads/2021/08/8v7p897y89a78y7va98y7a89-e1628448435907.jpeg",
  },
  {
    id: 4,
    src: "http://mtdata.ru/u24/photoFE22/20364427222-0/original.jpg",
  },
];

const containerEl = document.querySelector(".container");
const prevBtnEl = document.querySelector(".buttons_prev");
const nextBtnEl = document.querySelector(".buttons_next");

const navEl = document.querySelector(".nav");

let indexImg = 0; 
let currentImage = document.querySelector(".current_img");

prevBtnEl.addEventListener("click", function () {
  if (indexImg === 0) {
    indexImg = images.length - 1;
  } else {
    indexImg--;
  }
  showImage(indexImg);
});

nextBtnEl.addEventListener("click", function () {
  if (indexImg === images.length - 1) {
    indexImg = 0;
  } else {
    indexImg++;
  }
  showImage(indexImg);
});

for (let i = 0; i < images.length; i++) {
  const navItem = document.createElement("div");
  navItem.classList.add("nav_item");
  navItem.textContent = i + 1;
  navEl.append(navItem);
}

navEl.addEventListener("click", function (e) {
  indexImg = +e.target.textContent - 1;
  showImage(indexImg);
});

function showImage(index) {
  currentImage.src = images[index].src;
}
