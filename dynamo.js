const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'candidatos';
const getCandidates = async () => {
    const params = {
        TableName: TABLE_NAME,
    };
    const candidates = await dynamoClient.scan(params).promise();
    console.log(candidates);
    return candidates;
};

const getCandidateById = async (id) => {
   
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id : Number(id)
        },
    };

    console.log(params);
    return await dynamoClient.get(params).promise();
};

const updateCandidate = async (candidate) => {
    const params = {
        TableName: TABLE_NAME,
        Item: candidate,
    };
    return await dynamoClient.put(params).promise();
};

module.exports = {
    dynamoClient,
    getCandidates,
    getCandidateById,
    updateCandidate
}