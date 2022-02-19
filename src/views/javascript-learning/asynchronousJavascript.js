const hasMetting = false;
const metting = new Promise((resolve, reject) => {
  if (!hasMetting) {
    const mettingDetails = {
      name: "Technical",
      location: "Online",
      time: "10:29 PM",
    };
    resolve(mettingDetails);
  } else {
    reject(new Error("metting scheduled"));
  }
});

metting
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err.message);
  });
console.log("HI");
const processOrder = (customer) => {
  console.log("Process orde for customer 1");
  setTimeout(() => {
    const currentTime = new Date().getTime();
    console.log(currentTime);
  }, 3000);
};
console.log("Hi,I am Alamgir");
processOrder();

console.log("Hello World");
