const { Comment } = require('..models');

const commentsData = [
    {
        "comment": "Great post! Thanks for sharing."
    },    
    {
        "comment":"I do not agree with this post, but thank you for sharing."
    },
    {
        "comment":"This post was super helpful, thank you."
    },
    {
      "comment": "Interesting post."
    },
    {
      "comment": "This post confused me."
    }
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;