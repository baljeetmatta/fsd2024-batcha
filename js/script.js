//console.log("Welcome to script")
// a=10;
// console.log(a);
// console.log(typeof(a));
// a="test"
// console.log(a);
// console.log(typeof(a));
//'use strict'
//console.log(username);

// var username="Code";
// console.log(username);

// var username="Test";


// username="Test";
// console.log(username);
// const a=1;
// a=2;


// function sum()
// {
//     console.log(x,y,arguments[2]);

// }
// sum(23,4,5,6);


// function test()
// {
//     console.log("Test called");
// }
// //test()

// var data=function(){
// console.log("DAta called");

// }
// data();
//console.log(data());
//data();

//callback
// function task1()
// {
//     console.log("Task 1 called");

// }
// function task2()
// {
//     console.log("Task 3 called");

// }

// function executeTask(task)
// {
//     console.log("Executing Task");
//     task();

// }

// executeTask(task1);
// executeTask(task2);
// executeTask(function(){
//     console.log("My Task");
// })

//ARRAY
// let arr=[];
// arr[20]=10;
// arr[50]=20
// console.log(arr);
//Array
//Array obj;X
//Array *obj=new Array();X
//Java
//Array obj---Reference to Object=null
//obj=new Array();
//Array obj=new Array();
// let arr=new Array();
// let arr1=[];

// let arr=[45,6,7,8,10];
// let arr1=[40,10,40];
// function task1(item,index,array)
// {
//     console.log("Task called",item,index);
// }
// function task2(item,index)
// {
//     console.log("Task called",item,index);
// }

// printArray(arr,task1);


// //SPLICE
// //console.log(arr);
// //printArray(arr1);  
// //arr.splice(2,2);//,100,200,300,400,500);
// //console.log(arr);
// // console.log(arr);
// // arr.push(100);
// // console.log(arr);
// // let element=arr.pop();
// // console.log(arr);
// // console.log('element deteted is ',element)
// function printArray(array,task)
// {
// for(i=0;i<array.length;i++)
//     task(array[i],i,array);

//     //console.log(array[i]);
// }

// console.log(arr);
// arr.unshift(100);
// console.log(arr);
// let element=arr.shift();
// console.log(arr);
// console.log('element deteted is ',element)


//ITERATORS
//foreach, map, filter
let arr=[10,20,23,45];

//MAP
// let result=[];
// arr.forEach(function(item){
//     if(item%2==0)
//     result.push(item*2);
// else
// result.push(item);
// })
// console.log(result);
let result=arr.map(function(item){
    if(item%2==0)
    return item*2;
else
return item;
})
console.log(result);

//FILTER
// let result=[];
// arr.forEach(function(item){
//     if(item%2==0)
//         result.push(item);
// })
// console.log(result);

// let result=arr.filter(function(item){
//     if(item%2==0)
//         return true;
// })
// console.log(result);

//TRAVERSING
// for(i=0;i<arr.length;i++)
//     console.log(arr[i]);

//TRAVERSING USING FOR EACH
// function printData(item,index,array)
// {
//     console.log(item);

// }
// arr.forEach(printData);

// arr.forEach(function(item){

//     console.log(item);
// })




// arr.forEach(function (item,index,array){
//     array[index]=
// })