'use strict';
const IssueTrackerModel = require('../mongoose_models/models.js')

module.exports = function (app) {

  app.route('/api/issues/:project')
  
    .get(function (req, res){
      let project = req.params.project;
      console.log(req.params, req.query, req.body);
      
    })
    
    .post(function (req, res){
      let project = req.params.project;
      console.log(req.params, req.query, req.body);
      
    })
    
    .put(function (req, res){
      let project = req.params.project;
      console.log(req.params, req.query, req.body);
      
    })
    
    .delete(function (req, res){
      let project = req.params.project;
      console.log(req.params, req.query, req.body);
      
    });
    
};
