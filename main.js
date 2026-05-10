let img = document.querySelector(".box img");
let rightbut = document.querySelector(".right");
let leftbut = document.querySelector(".left");
let bulites = [...document.querySelectorAll("ul li")];

let image = [
  "image/wallpapersden.com_k-a-different-world_1920x1080.jpg",
  "image/images.jfif",
  "image/photo-1520209759809-a9bcb6cb3241.avif",
  "image/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.avif",
];
let current = 0;
let bulitesLength = bulites.length;
rightbut.onclick = () => {
  if (current < bulites.length - 1) {
    bulites[current].classList.remove("active");
    current++;
    bulites[current].classList.add("active");
    img.src = image[current];
    img.classList.remove("neon-anim");
    void img.offsetWidth;
    img.classList.add("neon-anim");
  }
};

leftbut.onclick = () => {
  if (current > 0 && current != 0) {
    bulites[current].classList.remove("active");
    current--;
    bulites[current].classList.add("active");
    img.src = image[current];
    img.classList.remove("neon-anim");
    void img.offsetWidth;
    img.classList.add("neon-anim");
  }
};

bulites.forEach((item, index) => {
  item.onclick = () => {
    current = index;
    img.src = image[current];
    bulites.forEach((bullet) => bullet.classList.remove("active"));
    bulites[current].classList.add("active");
    img.classList.remove("neon-anim");
    void img.offsetWidth;
    img.classList.add("neon-anim");
  };
});
