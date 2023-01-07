/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map((ele) => {
    if (ele.profession === "developer") {
      console.log(ele.name);
    }
  });
}
PrintDeveloperswithMap();

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach((ele) => {
    if (ele.profession === "developer") {
      console.log(ele.name);
    }
  });
}
PrintDeveloperbyForEach();

const newElement = { id: 4, name: "susan", age: "20", profession: "intern" };
function addData() {
  //Write your code here
  arr.push(newElement);
  console.log(arr);
}
addData();

function removeAdmin() {
  //Write your code here
  const newArr = arr.filter((ele) => {
    return ele.profession !== "admin";
  });
  console.log(newArr);
}
removeAdmin();

function concatenateArray() {
  //Write your code here
  let arr1 = [
    { id: 4, name: "joe", age: "25", profession: "Detective" },
    { id: 5, name: "joi", age: "22", profession: "chef" },
    { id: 6, name: "Dark", age: "26", profession: "Gamer" },
  ];
  const combinedArr = arr.concat(arr1);
  console.log(combinedArr);
}
concatenateArray();
