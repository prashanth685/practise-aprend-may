const arr1 = [12, 23, 132];
const arr2 = [1, 23, 4];
console.log(arr1.concat(arr2));
console.log(arr1.indexOf(23));
console.log(arr1.join(arr2));
console.log(arr1.lastIndexOf(12));

const date = new Date();
console.log(date.getFullYear());
console.log(date.toLocaleDateString());
const value = Math.ceil(100.12);
console.log(value);

const person = {
  name: "ajay",
};

// const res = localStorage.setItem("user", person);
// console.log(res);
console.log(Object.keys(person));

const res2 = arr1.filter((x) => x % 2 == 0);
console.log(res2);

const names = ["kishore", "anjan", "vishnu"];
function transform(name) {
  let res = [];
  for (let i = 0; i < names.length; i++) {
    res.push(name[i].toUpperCase());
  }
  return res;
}
console.log(transform(names));
console.log(
  Object.create({
    name: "kiran",
  }),
);
// const eventSource = new EventSource("/sse-stream");
// eventSource.addEventListener("open", () => {
//   console.log("connectio opened");
// });
// eventSource.addEventListener("message", (e) => {
//   console.log("reciev message", e.data);
// });
// eventSource.addEventListener("error", (err) => {
//   console.log("error occured", err);
// });

let promise = new Promise((res, rej) => {
  let success = 100 > 20;
  if (success) {
    res("success");
  } else {
    rej("Error");
  }
});
console.log(promise);

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const addone = add(1);
console.log(addone);

const addoneandtwo = addone(2);
console.log(addoneandtwo);

const addoneandtwothree = addoneandtwo(3);
console.log(addoneandtwothree);
