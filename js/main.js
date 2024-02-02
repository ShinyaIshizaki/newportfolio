'use strict';

{
  function login() {
    console.log("***Function login start***");
    
    const menuLogin = document.getElementById("login");
    const userId = document.getElementById("userid");
    const userPassword = document.getElementById("userpassword");
    
    // // ログインボタンをクリックしたとき、確認画面に遷移する
    // menuLogin.addEventListener("click", () => {
    //   console.log("Login clicked.");
    //   document.location.assign("confirm_login.html");
    // });
  }
  
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');
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

  // loginメソッドを呼び出す
  const submitConfirm =  document.getElementById("submitConfirm");
  submitConfirm.addEventListener("click", login);

  const threePointLeaderId = document.getElementById("threePointLeaderId");
  threePointLeaderId.addEventListener("click", () => {
    console.log("threePointLeaderId clicked");
    const threePointLeaderClass = document.getElementsByClassName("threePointLeader");
    const userId = document.getElementById("userId");
    const userPassword = document.getElementById("userPassword");
    const loginSubmit = document.getElementById("loginSubmit");
    threePointLeaderClass.classList.toggle("visible");
    userId.classList.toggle("visible");
    userPassword.classList.toggle("visible");
    loginSubmit.classList.toggle("visible");
  });
}