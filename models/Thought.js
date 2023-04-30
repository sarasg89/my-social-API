const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

function formatDate(date) {
    if (!date) return date;

    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }

    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " at " + date.getHours() + ":" + addZero(date.getMinutes());
}

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [Reaction]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)

// Create a virtual called reactionCount that retrieves the amount of tags associated with a thought.
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;