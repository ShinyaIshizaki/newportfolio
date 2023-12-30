'use strict';

// require を使って、モデルを呼び出す
const Job = require("../models/job");

// フォームから送信されたデータを Jobクラスに格納する
exports.postJob = (req, res, next) => {
  const job = new Job(req.body.title);
  job.save();
  res.redirect("/");
};

// jobsを取り出す
exports.getAllJobs = (req, res, next) => {
  const jobs = Job.fetchAll();
  res.render("index", {
    pageTitle: "Jobs List",
    jobs,
  });
};