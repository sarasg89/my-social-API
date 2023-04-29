const { User, Thought } = require('../models');

module.exports = {
    // GET all users
    async getUsers(req, res) {
        try {
            const users = await User.find();

            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // GET a single user by its _id
    async getOneUser(req, res) {
        try {
            const user = await User.findOne(
                { _id: req.params.userId }
            )
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // POST a new user
    async newUser(req, res) {
        try {
            const user = await User.create(req.body);

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // PUT update a user by its _id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE to remove user by its _id and any associated thoughts
    async deleteUser(req, res) {
        try {
            const user = await User.findByIdAndDelete(
                { _id: req.params.userId },
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID' });
            }

            await Thought.deleteMany(
                { _id: { $in: user.thoughts } }
            );
            res.json({ message: 'This user and their thoughts have been deleted' })
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // POST to add a new friend to a user's friend list
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID ' })
            };

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // DELETE to remove a friend from a user's friend list
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID ' })
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}