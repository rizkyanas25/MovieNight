const axios = require("axios");

// Make a request for a user with a given ID

const HitApi = async (
  method,
  url,
) => {
  
  try {
    const response = await axios[method](url)

    switch (response.status) {
      case 200:
        return response;
    
      default:
        break;
    }
  } catch (error) {
    throw(error)
  }
  
};

export default HitApi;