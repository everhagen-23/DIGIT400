let username;

document.getElementById("submit").onclick = function () {
  username = document.getElementById("nameText").value;
  document.getElementById("hiUser").textContent = `${username}`;
  document.getElementById("userWelcome").textContent =
    ", thats a cool name ʕ·͡ᴥ·ʔ";
};
