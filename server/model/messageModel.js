const mongoose = require('mongoose');

const MessageModel = mongoose.model('Mesg', {
    title: {
        type: String
    },
    message: {
        type: String
    },
}, 'mesgs');

module.exports = MessageModel;