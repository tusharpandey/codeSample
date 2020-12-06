const axios = require('axios');

export async function getRequest(url) {
    let responseObject = ""
    try {
        responseObject = await axios.get(url);
        responseObject = responseObject.data
    } catch (error) {
        responseObject = { error: 101, errorMsg: "Please Check your internet connection" }
    }
    return responseObject
}