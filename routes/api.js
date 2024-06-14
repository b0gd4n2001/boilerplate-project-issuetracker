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
      res.send(issue);
    })

    .put(async function (req, res) {
      console.log(req.body)
      let project = req.params.project;
      let { _id, ...update } = req.body;
      if (!req.body._id) return res.send({ error: 'missing _id' });
      if (Object.values(update).length == 0) return res.send({ error: 'no update field(s) sent', '_id': _id });
      let d = new Date();
      update.updated_on = d.toISOString();
      let IssueTrackerModel = mongoose.model(project, IssueTrackerSchema);
      let issue = await IssueTrackerModel.findOneAndUpdate({ _id: _id }, update);
      if (!issue) return res.send({ error: 'could not update', '_id': _id });
      issue = await IssueTrackerModel.findOne({ _id: _id });
      res.send({ result: 'successfully updated', '_id': _id });
    })

    .delete(async function (req, res) {
      if (!req.body._id) return res.send({ error: 'missing _id' });
      let project = req.params.project;
      let IssueTrackerModel = mongoose.model(project, IssueTrackerSchema);
      let issue = await IssueTrackerModel.findOne({ _id: req.body._id });
      if (!issue) return res.send({ error: 'could not delete', '_id': req.body._id });
      await issue.deleteOne();
      res.send({ result: 'successfully deleted', '_id': req.body._id })
    });

};
