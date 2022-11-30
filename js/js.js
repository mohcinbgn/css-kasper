let menuOn = document.querySelector(".toggle-menu");

menuOn.onclick = function () {
  menuOn.classList.toggle("active");
};

let search = document.querySelector(".search");
let clon = document.querySelector(".clon");

clon.onclick = function () {
  search.classList.toggle("active");
  clon.classList.toggle("active");
};

let changeLeft = document.querySelector(".left");
changeLeft.onclick = function () {
  change(this);
};
let changeRight = document.querySelector(".right");
changeRight.onclick = function () {
  change(this);
};

function change(e) {
  e.classList.toggle("active");
  landChange();
  setTimeout(function () {
    e.classList.toggle("active");
  }, 100);
}

////////////////////////////////////////////////
// Landing //
////////////////////////////////////////////////

let landingBack = document.querySelector(".landing");
let cerB1 = document.querySelector(".b1");
let cerB2 = document.querySelector(".b2");
function landChange() {
  if (landingBack.style.backgroundImage == 'url("images/bg2.jpg")') {
    landingBack.style.backgroundImage = 'url("images/bg3.jpg")';
    cerB1.classList.toggle("active");
    cerB2.classList.toggle("active");
  } else {
    landingBack.style.backgroundImage = 'url("images/bg2.jpg")';
    cerB1.classList.toggle("active");
    cerB2.classList.toggle("active");
  }
}

////////////////////////////////////////////////
// PortFolio //
////////////////////////////////////////////////

let shuffle = document.querySelectorAll(".shuffle li");

shuffle.forEach(function (e) {
  e.onclick = function () {
    shuffBgAllRemove();
    shuffBg(e);
    shuffBgR(e);
  };
});
function shuffBgAllRemove() {
  shuffle.forEach(function (d) {
    d.classList.remove("active");
  });
}
function shuffBg(e) {
  e.classList.toggle("active");
}
function shuffBgR(e) {
  e.classList.toggle("click");
  setTimeout(function () {
    e.classList.toggle("click");
  }, 200);
}
// remove box
// let boxRemove = document.querySelectorAll(".box");
// console.log(boxRemove);
// // boxRemove.forEach(function (e) {
// //   e.remove();
// // });
// console.log(boxRemove);

// let app = document.querySelector(".app");
// let photo = document.querySelector(".photo");
// let web = document.querySelector(".web");
// let print = document.querySelector(".print");

// shuffle.forEach(function (e) {
//   e.onclick = function () {
//     console.log(e.textContent.toLowerCase());
//     boxRemove.forEach(function (e) {
//       e.remove();
//     });
//   };
// });

// Affiche Image
