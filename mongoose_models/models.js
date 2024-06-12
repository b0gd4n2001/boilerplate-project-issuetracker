const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://bogdan:${process.env.PWD}@issuetracker.bhvvixg.mongodb.net/?retryWrites=true&w=majority&appName=IssueTracker`)
    .then(() => {
        console.log('mongoDB succ :)')
    })
    .catch(() => {
        console.log('mongoDB fail :(')
    });
const IssueTrackerSchema = mongoose.Schema(
    {
        "issue_title": String,
        "issue_text": String,
        "created_on": Date,
        "updated_on": Date,
        "created_by": String,
        "assigned_to": { type: String, default: '' },
        "open": { type: Boolean, default: true },
        "status_text": { type: String, default: '' }
    }
)
const IssueTrackerModel = mongoose.model("IssueTrackerMODEL", IssueTrackerSchema);

module.exports = IssueTrackerSchema;