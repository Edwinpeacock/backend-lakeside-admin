const dynamo = require('dynamoose');
const { v4: uuidv4 } = require('uuid')

const userSchema = new dynamo.Schema(
    {
        id: {
            type: 'String',
            hashKey: true,
            default: uuidv4,
        },
        name: {
            type: 'String',
            required: true
        },
        email: {
            type: 'String',
            required: true,
            unique: true,
            match: /.+\@.+\..+/,
        },
        password: {
            type: 'String',
            required: true
        },
    },
    {
        timestamps: true,
    }
)

const User = dynamo.model('Sample', userSchema);

module.exports = User;