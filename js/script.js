const container = document.querySelector(".container");
const hero = document.querySelector(".hero");
const thumbs = document.querySelectorAll(".thumb");
container.addEventListener("click", function (e) {
  //cek apahkah yang di cek itu thum bukan
  if (e.target.className == "thumb") {
    hero.src = e.target.src;
    hero.classList.add("fade");
    setTimeout(function () {
      hero.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      // if (thumb.classList.contains("active")) {
      //   thumb.classList.remove("active");
      // }
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
