// const os = require("os");
// if (os.platform() === "win32") {
//   console.log("hello windows user");
// } else if (os.platform() === "darwin") {
//   console.log("hello mac user");
// } else {
//   console.log("hello user!");
// }

// console.log(os.totalmem());
// console.log(os.freemem());

// const fs = require("fs");
// const data = fs.readdirSync("./");
// console.log(data);

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world!");
  } else if (req.url === "/about") {
    res.write("hello world! 2");
  } else {
    res.write("not found");
  }
  res.end();
});
server.listen(5000, () => {
  console.log("server listinig on 5000");
});
