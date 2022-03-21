const isEmpty = (obj) => {
  let arr = [];
  for (let elem in obj) {
    arr.push(elem);
  }
  return !arr.length;
};