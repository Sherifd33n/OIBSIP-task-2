function emailSend() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jamiusherif57@gmail.com",
    Password: "8258D152DB5658FF0AD7D9AFBA265A571EE1",
    To: "jamiuabiola57@gmail.com",
    From: "jamiusherif57@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav .middle ul");
const navList = document.querySelectorAll("nav .middle ul li");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navList.forEach((list) => {
    list.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});
