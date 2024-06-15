const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
    test('You can send a POST request to /api/issues/{projectname} with form data containing the required fields issue_title, issue_text, created_by, and optionally assigned_to and status_text.', function (done) {
        chai.request(server)
            .post('/api/issues/testProjectName')
            .send({
                issue_title: 'a',
                issue_text: 'a',
                created_by: 'a',
                assigned_to: '',
                status_text: ''
            })
            .end((err, res) => {
                assert.hasAllKeys(res.body, {
                    issue_title: 'a',
                    issue_text: 'a',
                    created_on: '2024-06-15T11:41:41.728Z',
                    updated_on: '2024-06-15T11:41:41.728Z',
                    created_by: 'a',
                    assigned_to: '',
                    open: true,
                    status_text: '',
                    _id: '666d7df5d0cd011dae7f66a3',
                    __v: 0
                })
                done();
            })
    })
    test('You can send a POST request to /api/issues/{projectname} with form data containing the required fields issue_title, issue_text, created_by, and optionally assigned_to and status_text.', function (done) {
        chai.request(server)
            .post('/api/issues/testProjectName')
            .send({
                issue_title: 'a',
                issue_text: 'a',
                created_by: 'a',
                assigned_to: '',
                status_text: ''
            })
            .end((err, res) => {
                assert.equal(res.body.issue_title, 'a');
                done();
            })
    })
    test('You can send a POST request to /api/issues/{projectname} with form data containing the required fields issue_title, issue_text, created_by, and optionally assigned_to and status_text.', function (done) {
        chai.request(server)
            .post('/api/issues/testProjectName')
            .send({
                issue_title: 'a',
                issue_text: 'a',
                created_by: 'a',
                assigned_to: '',
                status_text: ''
            })
            .end((err, res) => {
                assert.equal(res.body.issue_text, 'a');

                done();
            })
    })
    test('You can send a POST request to /api/issues/{projectname} with form data containing the required fields issue_title, issue_text, created_by, and optionally assigned_to and status_text.', function (done) {
        chai.request(server)
            .post('/api/issues/testProjectName')
            .send({
                issue_title: 'a',
                issue_text: 'a',
                created_by: 'a',
                assigned_to: '',
                status_text: ''
            })
            .end((err, res) => {
                assert.equal(res.body.created_by, 'a');
                done();
            })
    })
    test('You can send a POST request to /api/issues/{projectname} with form data containing the required fields issue_title, issue_text, created_by, and optionally assigned_to and status_text.', function (done) {
        chai.request(server)
            .post('/api/issues/testProjectName')
            .send({
                issue_title: 'a',
                issue_text: 'a',
                created_by: 'a',
                assigned_to: '',
                status_text: ''
            })
            .end((err, res) => {
                assert.equal(res.body.assigned_to, '');
                assert.equal(res.body.status_text, '');
                done();
            })
    })
    test(`If you send a POST request to /api/issues/{projectname} without the required fields, returned will be the error { error: 'required field(s) missing' }`, function (done) {
        chai.request(server)
            .post('/api/issues/testProjectName')
            .send({})
            .end((err, res) => {
                assert.deepEqual(res.body, { error: 'required field(s) missing' });
                done();
            })
    })
    test('You can send a GET request to /api/issues/{projectname} for an array of all issues for that specific projectname.', function (done) {
        chai.request(server)
            .get('/api/issues/testProjectName')
            .end((err, res) => {
                assert.isArray(res.body);
                assert.hasAllKeys(res.body[Math.floor(Math.random() * res.body.length)], {
                    issue_title: 'a',
                    issue_text: 'a',
                    created_on: '2024-06-15T11:41:41.728Z',
                    updated_on: '2024-06-15T11:41:41.728Z',
                    created_by: 'a',
                    assigned_to: '',
                    open: true,
                    status_text: '',
                    _id: '666d7df5d0cd011dae7f66a3',
                    __v: 0
                })
                done();
            })
    })
    test('You can send a GET request to /api/issues/{projectname} for an array of all issues for that specific projectname.', function (done) {
        chai.request(server)
            .get('/api/issues/testProjectName')
            .end((err, res) => {
                assert.isArray(res.body);
                assert.hasAllKeys(res.body[Math.floor(Math.random() * res.body.length)], {
                    issue_title: 'a',
                    issue_text: 'a',
                    created_on: '2024-06-15T11:41:41.728Z',
                    updated_on: '2024-06-15T11:41:41.728Z',
                    created_by: 'a',
                    assigned_to: '',
                    open: true,
                    status_text: '',
                    _id: '666d7df5d0cd011dae7f66a3',
                    __v: 0
                })
                done();
            })
    })
    test(`You can send a GET request to /api/issues/{projectname} and filter the request by also passing along any field and value as a URL query (ie. /api/issues/{project}?open=false). You can pass one or more field/value pairs at once.`, function (done) {
        chai.request(server)
            .get('/api/issues/testProjectName?open=true')
            .end((err, res) => {
                assert.isArray(res.body);
                assert.hasAllKeys(res.body[Math.floor(Math.random() * res.body.length)], {
                    issue_title: 'a',
                    issue_text: 'a',
                    created_on: '2024-06-15T11:41:41.728Z',
                    updated_on: '2024-06-15T11:41:41.728Z',
                    created_by: 'a',
                    assigned_to: '',
                    open: true,
                    status_text: '',
                    _id: '666d7df5d0cd011dae7f66a3',
                    __v: 0
                })
                done();
            })
    })
    test(`Passed:You can send a PUT request to /api/issues/{projectname} with an _id and one or more fields to update. On success, the updated_on field should be updated, and returned should be {  result: 'successfully updated', '_id': _id }.`, function (done) {
        chai.request(server)
            .put('/api/issues/testProjectName')
            .send({
                status_text: 'test',
                _id: '666d9edd891c720c505edd60',
            })
            .end((err, res) => {
                assert.deepEqual(res.body, { result: 'successfully updated', '_id': '666d9edd891c720c505edd60' })
                done();
            })
    })
    test(`When the PUT request sent to /api/issues/{projectname} does not include an _id, the return value is { error: 'missing _id' }.`, function (done) {
        chai.request(server)
            .put('/api/issues/testProjectName')
            .send({})
            .end((err, res) => {
                assert.deepEqual(res.body, { error: 'missing _id' })
                done();
            })
    })
    test(`When the PUT request sent to /api/issues/{projectname} does not include update fields, the return value is { error: 'no update field(s) sent', '_id': _id }. On any other error, the return value is { error: 'could not update', '_id': _id }.`, function (done) {
        chai.request(server)
            .put('/api/issues/testProjectName')
            .send({ _id: '5f665eb46e296f6b9b6a504d', goated: 'withthesauce' })
            .end((err, res) => {
                assert.deepEqual(res.body, { error: 'could not update', '_id': '5f665eb46e296f6b9b6a504d' })
                done();
            })
    })
    test(`You can send a DELETE request to /api/issues/{projectname} with an _id to delete an issue. If no _id is sent, the return value is { error: 'missing _id' }.`, function (done) {
        chai.request(server)
            .delete('/api/issues/testProjectName')
            .send({})
            .end((err, res) => {
                assert.deepEqual(res.body, { error: 'missing _id' })
                done();
            })
    })
    test(`You can send a DELETE request to /api/issues/{projectname} with an _id to delete an issue. On failure, the return value is { error: 'could not delete', '_id': _id }.`, function (done) {
        chai.request(server)
            .delete('/api/issues/testProjectName')
            .send({ _id: '5f665eb46e296f6b9b6a504d' })
            .end((err, res) => {
                assert.deepEqual(res.body, { error: 'could not delete', _id: '5f665eb46e296f6b9b6a504d' })
                done();
            })
    })


});
