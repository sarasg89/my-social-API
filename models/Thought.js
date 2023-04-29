const { Schema, model } = require('mongoose');

const Thought = model('thought', thoughtSchema);

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
            // get: (createdAtVal) => dateFormat(createdAtVal),
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


module.exports = Thought;