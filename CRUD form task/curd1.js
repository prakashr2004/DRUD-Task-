let value=null;

let contain=document.createElement("div")
contain.id="cont1"

let div1=document.createElement("div")
div1.id="cont2"

let lb1=document.createElement("p")
lb1.innerText="ProductCode"

let input1=document.createElement("input")
input1.setAttribute('type', 'number');


let lb2=document.createElement("p")
lb2.innerText="productName"

let input2=document.createElement("input")
input2.setAttribute('type', 'text');

let lb3=document.createElement("p")
lb3.innerText="Qty"

let input3=document.createElement("input")
input3.setAttribute('type', 'number');


let lb4=document.createElement("p")
lb4.innerText="Price"

let input4=document.createElement("input")
input4.setAttribute('type', 'number');

let div2=document.createElement("div")
div2.id="insidecont"

let btn1=document.createElement("button")
btn1.innerText="Submit"

let btn2=document.createElement("button")
btn2.innerText="Reset"

div1.append(lb1,input1,lb2,input2,lb3,input3,lb4,input4,div2)
div2.append(btn1,btn2)
contain.append(div1)
document.body.append(contain)


let table=document.createElement('table')
table.className="tab"

let table1=document.createElement('table')
let row=document.createElement('tr')
let head=document.createElement('th')
head.innerText="ProductCode"

let head2=document.createElement('th')
head2.innerText="product"

let head3=document.createElement('th')
head3.innerText="Qty"

let head4=document.createElement('th')
head4.innerText="Price"

row.append(head,head2,head3,head4)
table1.append(row)
table.append(table1)
document.body.append(table)


btn1.addEventListener("click",but1)



function but1(){
 

  if(value==null){


  if(input1.value=="" || input2.value==""|| input3.value==""|| input4.value=="")
  {
     alert("Please Enter a Valid Product")
  }
  else{
   let row2=document.createElement("tr")
   let data1=document.createElement("td");
   data1.innerText=input1.value;
   input1.value="";
   
   let data2=document.createElement("td");
   data2.innerText=input2.value;
   input2.value=""
   
   let data3=document.createElement("td");
   data3.innerText=input3.value;
   input3.value=""
   
   let data4=document.createElement("td");
   data4.innerText=input4.value;
   input4.value="";


 
   
   let edit=document.createElement("button")
   edit.className="edbtn"
   edit.innerText="Edit"
  

   let debtn=document.createElement("button")
   debtn.className="dele"
   debtn.innerText="Delete"
   
   
  
   row2.append(data1,data2,data3,data4,edit,debtn)
   table1.append(row2)

  


  debtn.addEventListener("click",del)

  function del(){
    if(confirm("Do you sure delete the item"))
    {
     data1.parentElement.remove()
    }
  }


  edit.addEventListener("click",function(){
   editFunction(this)
  })

 }
}


else{
 updatefunction()
}


function editFunction(element)
{
  value=element.parentElement.childNodes;
  input1.value=value[0].innerText
  input2.value=value[1].innerText
  input3.value=value[2].innerText
  input4.value=value[3].innerText
} 

function updatefunction()
{
value[0].innerText=input1.value
 value[1].innerText=input2.value
 value[2].innerText=input3.value
 value[3].innerText=input4.value

 input1.value=""
 input2.value=""
 input3.value=""
 input4.value=""

 value=null

}


btn2.addEventListener("click",reset)

function reset(){
 
//  if(confirm("do you want to Reset?")){
  input1.value=""
  input2.value=""
  input3.value=""
  input4.value=""
 }
}
