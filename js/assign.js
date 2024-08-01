// let input1=document.querySelector("#input1");
// let input2=document.querySelector("#input2");
// let result=document.querySelector("#result");
// let operateBtn=document.querySelector("#operateBtn");

// operateBtn.addEventListener("click",function(){

//     let operand1=input1.value;
//     let operand2=input2.value;
//     let add=parseInt(operand1)+parseInt(operand2);
//     result.value=add;


// })

//let digits = document.querySelector("#digits");
// let btn1=document.querySelector("#btn1");
// let btn2=document.querySelector("#btn2");
// let btn3=document.querySelector("#btn3");

// btn1.addEventListener("click",clickHandler);
// btn2.addEventListener("click",clickHandler);
// btn3.addEventListener("click",clickHandler);
// let operand1 = 0;
// let operator = "";
// let isNew = false;
// let elements = document.querySelectorAll(".btns");
// elements.forEach(function (element) {
//     element.addEventListener("click", clickHandler);

// })
// let operate = document.querySelectorAll(".operate");
// operate.forEach(function (element) {
//     element.addEventListener("click", operation);

// })
// function operation(e) {
//     let target = e.target;
//     if (target.innerText == "+") {
//         operand1 = parseInt(digits.innerText);
//         operator = "+";
//         isNew = true;


//     }

//     if (target.innerText == "=") {
//         let operand2 = parseInt(digits.innerText);
//         let resultData = operand1 + operand2;
//         digits.innerText = resultData;
//         operand1 = 0;
//         isNew = true;



//     }

// }
// function clickHandler(e) {
//     if (digits.innerText == "0")
//         digits.innerText = "";
//     if (isNew == true) {
//         digits.innerText = "";
//         isNew = false;
//     }


//     let target = e.target;
//     digits.innerText += target.innerText;



// }
let tasks = [];
let id = 1;
let taskname = document.querySelector("#taskname");
let taskList = document.querySelector("#taskList");
taskname.addEventListener("keypress", function (e) {
    //console.log(e);
    if (e.key == "Enter") {
        //tasks.push(taskname.value);
        let obj = {};
        obj.title = taskname.value;
        obj.status = 'Pending';
        obj.id = id;
        id++;
        tasks.push(obj);
        setLocalStorage();

        addDom(obj);
        taskname.value = "";
        console.log(tasks);



    }
    // console.log("Enter pressed")
})
function addDom(task) {
    // let li=document.createElement("li");
    // li.innerText=taskname.value;

    // taskList.append(li);

    let taskdiv = document.createElement("div");
    taskdiv.setAttribute("id",task.id);


    let span = document.createElement("span");
    span.innerText = task.title;//taskname.value;

    let chk = document.createElement("input");
    chk.setAttribute("type", "checkbox");
    chk.addEventListener("click", function () {
        //console.log(chk.checked);
        let status = "";
        if (chk.checked) {
            status = "Completed";
            span.style.textDecoration = "line-through"
        }
        else {
            status = "Pending";

            span.style.textDecoration = "none";

        }
        tasks = tasks.map(function (item) {
            if (item.id == task.id)
                item.status = status;

            return item;
        })
        setLocalStorage();
        console.log(tasks);


    })
    let delButton = document.createElement("button");
    delButton.innerText = "Del";
    // delButton.addEventListener("click", function () {

    //     taskdiv.remove();
    //     tasks = tasks.filter(function (item) {
    //         if (item.id != task.id)
    //             return true;
    //     })

    //     console.log(tasks);

    // })
    delButton.addEventListener("click",delHandler);


    taskdiv.append(span);
    taskdiv.append(chk);
    taskdiv.append(delButton);

    taskList.append(taskdiv);


}
function delHandler(e)
{
    let parent=e.target.parentNode;
    let id=parent.getAttribute("id");
  //STEP 1 Div rempve
    parent.remove();
          tasks = tasks.filter(function (item) {
            if (item.id != id)
                return true;
        })
        setLocalStorage();
        console.log(tasks);





}
function setLocalStorage()
{
    localStorage.setItem("tasks",JSON.stringify(tasks));


    // let arr=["One","Two"];
    // document.write(arr);
//     let arr=[];
//     let obj={};
//     obj.title="Code";

//    // arr.push(obj);

//     document.write(JSON.stringify(obj));
//     localStorage.setItem("items",JSON.stringify(obj));
// let data=JSON.parse( localStorage.getItem("items"));

// console.log(data.title);

//console.log(obj);

   // let name="Code";
    //localStorage.setItem("items",arr);
    //let item=localStorage.getItem("items");
    //console.log(item[0]);



}
//setLocalStorage();
function getLocalStorage()
{
    if(localStorage.getItem("tasks"))
     tasks=JSON.parse( localStorage.getItem("tasks"));


     console.log(tasks)
    tasks.forEach(element => {
        
        addDom(element);
});

     
}
getLocalStorage();
