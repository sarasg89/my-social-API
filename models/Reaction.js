const { Schema, Types } = require('mongoose');

function formatDate(date) {
    if (!date) return date;

    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }

    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " at " + date.getHours() + ":" + addZero(date.getMinutes());
}

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate,
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
)

module.exports = reactionSchema;