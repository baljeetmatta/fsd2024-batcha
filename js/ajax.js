
// //1. OBJECT OF CLASS XMLHttpRequest
// //XMLHttpRequest request=new XMLHttpRequest();
// let request=new XMLHttpRequest();
// //2. Request Prepare (Method,URL)
// request.open("GET","../data.txt",true);
// //3. handle Load Event 
// // request.onload=function()
// // {

// // }
// request.addEventListener("load",function(){
//     console.log(request.responseText);

// })
// //4. Send/Submit
// request.send();

// let request=new XMLHttpRequest();
// request.open("GET","https://reqres.in/api/users?page=2");
// request.addEventListener("load",function(){
//     let json=JSON.parse(request.responseText);

//     console.log(json.data);

// })
// request.send();

// let request=new XMLHttpRequest();
// request.open("POST","https://reqres.in/api/users",true);
// request.setRequestHeader("content-type","application/json");

// request.addEventListener("load",function(){
// console.log(request.status);

//     console.log(request.responseText);

// })
// let obj={};
// obj.name="CodeQuotient";
// obj.job1="Job";
// //request.send(JSON.stringify(obj));
// request.send("delay=4&asdsa=2");
// let no=10;
// let prom=new Promise((resolve,reject)=>{

//         if(no%2==0)
//             resolve(no);
//         else
//             reject();


// })
// //let p=prom;
// //console.log(p);
// prom.then((x)=>{
//     console.log("Even",x);
// }).catch(()=>{

//     console.log("Odd");

// })

// let p=fetch("https://reqres.in/api/users?page=2");
// p.then((response)=>{
// console.log(response);
//         return response.json();

// }).then((response)=>{
//     console.log(response);

// }).catch((err)=>{
//     console.log(err);

// })
//console.log(p);

let obj={};
obj.name="Code";
obj.job="Trainer";
// fetch("https://reqres.in/api/users",{
//     method:"POST",
//     body:JSON.stringify(obj),
//     headers:{
//         "Content-Type":"application/json"
//     }

// }).then((response)=>{
//     return response.json();
// }).then((response)=>{
//     console.log(response);
// })

async function getData()
{
    let result=await fetch("https://reqres.in/api/users?page=2");
    let output=await result.json();
    console.log(output);
    console.log("Code");

}
getData();



