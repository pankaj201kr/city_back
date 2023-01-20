const axios = require("axios");
const httpStatus = require("http-status");


const axoisData = async (req, res) => {
    const data = await axios({
        url: "https://api.binance.com/api/v1/time",
        method: 'get'
    })
    console.log(data.data)
    return res.status(httpStatus.OK).send(data.data)
}

module.exports = {
    axoisData
}