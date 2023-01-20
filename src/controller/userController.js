const userModel = require("../model/userModel");
const httpStatus = require("http-status");

const createUser = async (req, res) => {
    const data = req.body;
    const { name, cityId, mobileNumber } = data;

    if (!(/^[A-Za-z]+$/.test(name))) {
        return res.status(httpStatus.BAD_REQUEST).send({ message: "Name only accept the alphabeds" })
    };

    if (!(/^[0-9]+$/.test(mobileNumber))) {
        return res.status(httpStatus.BAD_REQUEST).send({ message: "Mobile Number only accept the Numbers" })
    };


    const createData = await userModel.create(data);

    return res.status(httpStatus.CREATED).send({ msg: "created user successfully", data: createData })

};

const findUser = async (req, res) => {
    const result = await userModel.find() /*.populate([{ path: "cities", select: "city" }])*/
    if (!result) {
        return res.status(httpStatus.NOT_FOUND).send({ message: "Not Found User" })
    }

    return res.status(httpStatus.OK).send({ data: result });
}

const updateUser = async (req, res) => {
    const userId = req.params.userId;
    const findUser = await userModel.findOne({ _id: userId });
    if (!findUser) {
        return res.status(httpStatus.NOT_FOUND).send({ message: "Not Found User" })
    };
    const updateData = await userModel.findOneAndUpdate(req.body)
    const result = await userModel.findOne({ _id: userId })
    return res.status(httpStatus.OK).send({ message: "updated successfully", data: result })
}
module.exports = {
    createUser,
    findUser,
    updateUser
}