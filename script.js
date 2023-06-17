/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i].marks > 50){
    //         console.log(arr[i].name);
    //     }
    // }
    arr.map(val => {
        if(val.marks>50){
            console.log(val);
        }
    })
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach((val)=>{
        if(val.marks>50){
            console.log(val);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj = {id:4,name:"susan",age:"20",marks:45};
    arr.push(obj);
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr = arr.filter((val)=>{
        return val.marks>50;
    })
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        {id: 3, name: "person1", age: 21, marks: 80},
        {id: 4, name: "person2", age: 22, marks: 85},
        {id: 5, name: "person3", age: 23, marks: 35}
      ];
       let concateArr = arr.concat(newArr);
    //   arr.concat(newArr);
      console.log(concateArr);
  }
