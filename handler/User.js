const User = require("../model/User")


exports.addUser = async (data) => {
    const user = new User(data);
    const saved = await user.save();

    return saved;
};

exports.getAllUsers = async () => {
    const getAllUsers = await User.scan().exec();
    return getAllUsers;
}

exports.getSingleUser = async (data) => {
    const getSingleUser = await User.scan({ email: data.email }).exec();
    return getSingleUser;
}

exports.updateUser = async (data) => {
    const updated = await User.update({
        email:'test1@gmail.com'
    }, { password: "hello world" });
    console.log(updated)

}

exports.deleteUser = async (data) => {
    const deleted = await User.delete({ email: data.email });
    console.log(deleted)
}