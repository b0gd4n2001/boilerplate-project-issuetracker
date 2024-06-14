const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    it('You can send a POST request to /api/issues/{projectname} with form data containing the required fields issue_title, issue_text, created_by, and optionally assigned_to and status_text.', function(done) {
        chai.request(server)
            .post('/api/issues/:project')
            .send({
                issue_title: 'a',
                issue_text: 'a',
                created_by: 'a',
                assigned_to: '',
                status_text: ''
            })
            .end((err, res) => {
                assert.equal(res.body.issue_title, 'a');
                assert.equal(res.body.issue_text, 'a');
                assert.equal(res.body.created_by, 'a');
                assert.equal(res.body.assigned_to, '');
                assert.equal(res.body.status_text, '');
                done();
            })
    })
  
});
