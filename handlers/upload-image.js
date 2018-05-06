const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')
const s3 = new AWS.s3();

module.exports = function uploadImage(request) {
    if (!request || !request.filename || !request.file)
        throw new Error('Error uploading image')

    var params = {
        Bucket: 'ardoino-comment-images',
        Key: filename,
        Body: file
    };
    s3.upload(params, function (err, res) {
        if (err) {
            console.log("Error uploading image: ", err)
            res.send('err')
        } else {
            console.log("Successfully uploaded data toBucket")
            res.send('success')
        }
    });
}