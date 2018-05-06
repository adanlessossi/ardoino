const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function getComment(commentId) {
    if (typeof commentId === 'undefined')
        return docClient.scan({
            TableName: 'ardoino-comments'
        }).promise()
            .then(result => result.Items)

    return docClient.get({
        TableName: 'ardoino-comments',
        Key: {
            commentId: commentId
        }
    }).promise()
        .then(result => result.Item)
}

module.exports = getComment