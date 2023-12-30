const express = require('express');
const router = express.Router();

const jobsController = require("../controllers/jobs");

// ジョブ関連のルート
router.get('/jobs', jobsController.getAllJobs);

module.exports = router;