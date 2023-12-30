'use strict';

// データを格納するために、空の配列を作成する
const jobs = [];

/*
Jobクラスを作成し、その中でデータを管理する
エクスポートしてコントローラーで使えるようにする
*/
module.exports = class Job {
  constructor(title) {
    this.jobTitle = title;
  }
  
  // save メソッドを使用し、jobsにデータを格納する
  save() {
    jobs.push(this);
  }

  // データを取り出せるように、fetchAll メソッドを作成し、静的メソッドとする
  static fetchAll() {
    return jobs;
  }
};