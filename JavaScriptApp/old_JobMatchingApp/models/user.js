'use strict';

// データを格納するために、空の配列を作成する
const users = [];

/*
Userクラスを作成し、その中でデータを管理する
エクスポートしてコントローラーで使えるようにする
*/
module.exports = class User {
  constructor(title) {
    this.userTitle = title;
  }
  
  // save メソッドを使用し、jobsにデータを格納する
  save() {
    users.push(this);
  }

  // データを取り出せるように、fetchAll メソッドを作成し、静的メソッドとする
  static fetchAll() {
    return users;
  }
};