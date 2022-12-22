const dynamoose = require('dynamoose')
require('dotenv').config()

const ddb = new dynamoose.aws.ddb.DynamoDB({
    "region":process.env.AWS_REGION,
    "credentials":{
        accessKeyId: process.env.AWS_ACCESS_ID,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }
})

const connectDB = async () => {
    try {
        await dynamoose.aws.ddb.set(ddb)
        console.log("DynamoDB Connected to Successfully");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB