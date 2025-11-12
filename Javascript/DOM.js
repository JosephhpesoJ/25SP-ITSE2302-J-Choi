// change text
let introPara = document.querySelector(".intro p");
introPara.textContent =
  "We grow more mature every day. We also grow more silly every day. Do we get sillier because we try to cancel out the mental pressure set upon us by every day life? Anyways, it's pretty funny how we get more mature and immature at the same time.";

// change images
document.getElementById("firstImage").src = "Images/dream.jpg";
document.getElementById("secondImage").src = "Images/king.jpg";
document.getElementById("thirdImage").src = "Images/papyrus.jpg";

// change titles
document.querySelectorAll(".content-title")[0].textContent = "Epic boss fight";
document.querySelectorAll(".content-title")[1].textContent = "YES KING";
document.querySelectorAll(".content-title")[2].textContent =
  "A scroll of papyrus(?)";

// change paragraphs
document.getElementById("firstText").textContent =
  "Everybody's dream is to become a god of hyperdeath and erase the timeline.";
document.getElementById("secondText").textContent =
  "Oh yeah I'm the king. I'm too good at chess. I'm a grandmaster. I solo my opponents with just the king.";
document.getElementById("thirdText").textContent =
  "It's a scroll of papyrus. Or is it a skeleton? No, it's definitely a scroll of papyrus. Or is it? Maybe there's a skeleton underneath the papyrus?";

// color buttons
let header = document.querySelector("header");

let btn1 = document.getElementById("ColorChanging");
let btn2 = document.getElementById("ColorChanged");
let btn3 = document.getElementById("ColorChange");

// button one
btn1.addEventListener("click", function () {
  header.style.backgroundColor = "#2E8B57";
  header.style.color = "#FFFFFF";
});

// button two
btn2.addEventListener("click", function () {
  header.style.backgroundColor = "#4682B4";
  header.style.color = "#FFFFFF";
});

// button three
btn3.addEventListener("click", function () {
  header.style.backgroundColor = "#8B0000";
  header.style.color = "#FFD700";
});
