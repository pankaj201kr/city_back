const cityModel = require("../model/cityModel")
const httpStatus = require("http-status")

const createcity = async (req, res) => {
    const data = req.body
    const { city } = data

    if (!(/^[A-Za-z]+$/.test(city))) {
        return res.status(httpStatus.BAD_REQUEST).send({ message: "City only accept the alphabeds" })
    };

    const findcity = await cityModel.findOne({ city });
    if (findcity) {
        return res.status(httpStatus.FORBIDDEN).send({ msg: "city name already exist" })
    }
    const createData = await cityModel.create(req.body);
    res.status(httpStatus.CREATED).send(createData)
};

const findcity = async (req, res) => {
    const result = await cityModel.find();
    if (!result) {
        return res.status(httpStatus.NOT_FOUND).send({ message: "Not Found City" })
    }
    return res.status(httpStatus.OK).send({ data: result })
}

module.exports = {
    createcity,
    findcity
}