//console.log(document.all[3]);
//var elements=document.getElementsByTagName("p")
//console.log(elements);
//console.log(elements[0]);
//elements[1].innerHTML="Demo from javascript";
// var element=document.getElementById("mypara");
// element.innerHTML="Javascript";

// var elements=document.getElementsByClassName("x");
// for(i=0;i<elements.length;i++)
//     elements[i].setAttribute("style","background-color:red")

// elements.forEach(element => {
//     console.log(element);

    
// });
//document.write("<p>Hello</p>");

// var elements=document.querySelectorAll("p.x")
// console.log(elements);


// var element=document.querySelector("#mypara");
// //console.log(element);
// //console.log(element.innerText);
// element.innerText="Demo <b>New Content</b>"
// let box=document.querySelector("#box");
// box.value="Initial data";

let mypara=document.querySelector("#mypara");
let second=document.querySelector("#second");

// second.addEventListener("click",function(){
//     console.log("Clicked")
// })

second.addEventListener("click",test);

mypara.addEventListener("click",test);



function test(e)
{
    let target=e.target;
    console.log(target.innerHTML);

    //console.log("Clicked ",e);

}