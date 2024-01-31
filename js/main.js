'use strict';

{
  function login() {
    console.log("***Function login start***");
  }

  const menuLogin = document.getElementById("login");
  const userId = document.getElementById("userid");
  const userPassword = document.getElementById("userpassword");
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  // ログインボタンをクリックしたとき、確認画面に遷移する
  menuLogin.addEventListener("click", () => {
    console.log("Login clicked.");
    document.location.assign("confirm_login.html");
  });

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');
      
      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });

}