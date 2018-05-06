'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')

module.exports = function createComment(request) {
    console.log('Save a Comment', request)
    if (!request || !request.email || !request.comment)
        throw new Error('To add a comment please provide your eamil and the comment')
    return docClient.put({
        TableName: 'ardoino-comments',
        Item: {
            commentId: uuid(),
            email: request.email,
            comment: request.comment
        }
    }).promise()
        //})
        .then((res) => {
            console.log('Comment is saved!', res)
            return res
        })
        .catch((saveError) => {
            console.log(`Ooops, Comment is not saved: (`, saveError)
            throw saveError
        })
}
