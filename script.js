
 let show=document.querySelector(".amount h2 ")
 let total=document.querySelector(".total h1 ")
 console.log(total);
 console.log(show);
// let billamount
let peoplevalue 
function myfunction2(){
    let people=document.getElementById("peoples")
    peoplevalue=people.value
    console.log(people.value);
    document.createElement("span").textContent=people.value

}
console.log(`peoplevalues ${peoplevalue}`);

function myfunction(){
    const bill=document.getElementById("mybill")
    console.log(bill.value);
    // billamount=bill.value
    const button=document.querySelectorAll(".button");
console.log(button);




var buttonvalue
for(let i=0;i<6;i++){
    // console.log(button);
    button[i].addEventListener('click',(e)=>{
        console.log("you clicked me");
        console.log((i+1)*5);
     show.textContent= `$ ${Math.floor(bill.value*((i+1)*5)/100)}` 


     total.textContent=`$ ${parseInt(bill.value)+parseInt(Math.floor(bill.value*((i+1)*5)/100))}`
    console.log(Math.floor(bill.value*((i+1)*5)/100));

        // if(button)
    })
}
console.log(buttonvalue);

}
// console.log(billamount);
console.log(show);
