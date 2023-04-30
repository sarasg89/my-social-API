const { Thought, User, Reaction } = require('../models');

module.exports = {
    // GET all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();

            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // GET a single thought by its _id
    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne(
                { _id: req.params.thoughtId }
            )
                .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' })
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // POST to create a new thought and push it to the associated user's thoughts array field
    async newThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: "Thought created, but that user ID doesn't exist"})
            };

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // PUT to update a thought by its _id
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE to remove a thought by its _id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(
                { _id: req.params.thoughtId },
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' });
            }

            res.json({ message: 'This thought has been deleted' })
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // POST to create a reaction stored in a single thought's reactions array field
    async newReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' })
            };

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE to pull and remove a reaction by the reaction's reactionId value
    async deleteReaction(req, res) {
        try {
            console.log(req.params.reactionId)
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID' })
            };

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}