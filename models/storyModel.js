var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new mongoose.Schema ({
    scenes: [
        {
            imageURL: Buffer,
            text: String,
            index: Number
        }
    ]
});


var story = mongoose.model('story', storySchema);

module.exports = story;