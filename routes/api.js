'use strict';
const IssueTrackerSchema = require('../mongoose_models/models.js')
const mongoose = require('mongoose');
let i = 0;

module.exports = function (app) {

  app.route('/api/issues/:project')

    .get(async function (req, res) {
      let project = req.params.project;
      let IssueTrackerModel = mongoose.model(project, IssueTrackerSchema);
      let all = await IssueTrackerModel.find(req.query);
      res.send(all);
    })

    .post(async function (req, res) {
      let d = new Date();
      let project = req.params.project;
      let issue = req.body;
      if (!issue.issue_title || !issue.issue_text || !issue.created_by) return res.send({ error: 'required field(s) missing' });
      let IssueTrackerModel = mongoose.model(project, IssueTrackerSchema);
      issue.created_on = d.toISOString();
      issue.updated_on = d.toISOString();
      issue = await IssueTrackerModel.create(issue);
      console.log(++i);
      console.log(req.params, req.body, issue);
      res.send(issue);
    })

    .put(function (req, res) {
      let project = req.params.project;
      res.sendFile(process.cwd() + '/views/issue.html')

    })

    .delete(function (req, res) {
      let project = req.params.project;
      res.sendFile(process.cwd() + '/views/issue.html')

    });

};
