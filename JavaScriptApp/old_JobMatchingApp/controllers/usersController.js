'use strict';

// require を使って、モデルを呼び出す
const User = require("../models/user");

// フォームから送信されたデータをUserクラスに格納する
exports.postUser = (req, res, next) => {
  const user = new User(req.body.title);
  user.save();
  res.redirect("/");
};

// usersを取り出す
exports.getAllUsers = (req, res, next) => {
  const users = User.fetchAll();
  res.render("index", {
    pageTitle: "Users List",
    users,
  });
};