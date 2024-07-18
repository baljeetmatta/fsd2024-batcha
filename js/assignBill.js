const menu=[{id:"item1",
    itemName:"Butter Roti",
    rate:20,
    taxes:[{
        name:"Service Charge",
        rate:10,
        isInPercent:false
    }]

},
{id:"item2",
    itemName:"Paneer",
    rate:30,
    taxes:[]

}

]
const bill={
    id:"B1",
    billNumber:1,
    billItems:[{
        id:"item2",
        quantity:3,
        discount:{
            rate:10,
            isInPercent:true
        }
    },
    {
        id:"item1",
        quantity:4,
        discount:{
            rate:10,
            isInPercent:true
        }
    }]
}
function calculateBill(bill)
{
    bill.billItems.forEach(function(element)  {
       // console.log(element.id);
       let product=searchMenu(element.id);
        console.log(product.itemName);


    });
}
calculateBill(bill);
function searchMenu(menuitem)
{
    let results=menu.filter(function(item){
        if(item.id==menuitem.id)
            return true;

    })
    return results[0];


}
