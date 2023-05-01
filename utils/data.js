const { Types } = require('mongoose');

spidermanId = new Types.ObjectId();
spidermanThoughtId = new Types.ObjectId();
hulkId = new Types.ObjectId();
hulkThoughtId = new Types.ObjectId();
supermanId = new Types.ObjectId();
supermanThoughtId = new Types.ObjectId();
capmarvelId = new Types.ObjectId();
capmarvelThoughtId = new Types.ObjectId();
capamericaId = new Types.ObjectId();
capamericaThoughtId = new Types.ObjectId();
thorId = new Types.ObjectId();
thorThoughtId = new Types.ObjectId();

const userData = [
    {
        username: "spiderman",
        email: "peter.parker@email.com",
        _id: spidermanId,
        thoughts: [
            spidermanThoughtId
        ]
    },
    {
        username: "hulk",
        email: "r.banner@email.com",
        _id: hulkId,
        thoughts: [
            hulkThoughtId
        ]
    },
    {
        username: "superman",
        email: "clark_kent@email.com",
        _id: supermanId,
        thoughts: [
            supermanThoughtId
        ]
    },
    {
        username: "cap_marvel",
        email: "carol.danvers@email.com",
        _id: capmarvelId,
        thoughts: [
            capmarvelThoughtId
        ]
    },
    {
        username: "cap_america",
        email: "steven.rogers@email.com",
        _id: capamericaId,
        thoughts: [
            capamericaThoughtId
        ]
    },
    {
        username: "thor",
        email: "thor@email.com",
        _id: thorId,
        thoughts: [
            thorThoughtId
        ]
    },
]

const thoughtsData = [
    {
        _id: spidermanThoughtId,
        thoughtText: "Whatever life holds in store for me, I will never forget these words: 'With great power, comes great responsibility.' This is my gift, my curse. Who am I? I'm Spiderman.",
        username: "spiderman",
        userId: spidermanId,
    },
    {
        _id: hulkThoughtId,
        thoughtText: "The worst part about being strong is that no one ever asks if you're okay.",
        username: "hulk",
        userId: hulkId,
    },
    {
        _id: supermanThoughtId,
        thoughtText: "I think a hero is an ordinary individual who finds strength to persevere and endure in spite of overwhelming obstacles.",
        username: "superman",
        userId: supermanId,
    },
    {
        _id: capmarvelThoughtId,
        thoughtText: "I think a hero is an ordinary individual who finds strength to persevere and endure in spite of overwhelming obstacles.",
        username: "cap_marvel",
        userId: capmarvelId,
    },
    {
        _id: capamericaThoughtId,
        thoughtText: "Be careful. Look out for each other. This is the fight of our lives and we're going to win. Whatever it takes. Good luck.",
        username: "cap_america",
        userId: capamericaId,
    },
    {
        _id: thorThoughtId,
        thoughtText: "I choose to run towards my problems, and not away from them because that's what heroes do.",
        username: "thor",
        userId: thorId,
    },
]



module.exports = { userData, thoughtsData };