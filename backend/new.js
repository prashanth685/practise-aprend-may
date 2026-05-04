const axios = require("axios");

const fetchdata = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(res.data.body);
  } catch (error) {
    console.log(error);
  }
};
fetchdata();
