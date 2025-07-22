let sum=0;
const cartbtn=document.querySelectorAll("[data-cart]");
const product=document.querySelectorAll("[data-product]");
const list=document.querySelector("[data-product-list]");
const total=document.querySelector("[data-total]");
const checkout=document.querySelector("[data-Checkout]");
const input=document.querySelector("[data-input]");
const enter=document.querySelector("[data-enter]");


function resetList(){
if(list.querySelectorAll('div').length>0){list.querySelectorAll('div').forEach(items =>{
        if(items!=list){list.removeChild(items);}});}

if(list.innerText==""){
    list.innerText="You have nothing in your Cart...";}
    checkout.classList.add('active');
    total.classList.add('active');
}

resetList();


checkout.addEventListener('click',()=>{
    checkout.classList.add('active');
    total.classList.add('active');
    sum=0;
    resetList();
});

function updateTotal(){
    total.innerText="";
    total.innerText=`total-$${sum.toFixed(2)}`;
}

cartbtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
    checkout.classList.remove('active');
    total.classList.remove('active');
    const wrapp=btn.parentElement;
    const child=wrapp.querySelector("[data-product]");
    const str=child.innerText;
    const price=str.match(/[\d.]+$/)[0];
    sum+=parseFloat(price);
    updateTotal();
    if(list.innerText!="" && list.querySelectorAll('div').length==0){
        list.innerText="";   
     }
    const newchild=document.createElement('div');
    newchild.innerText=child.innerText;
    list.prepend(newchild);

    }
)});

enter.addEventListener('click',()=>{
    let k=1;
    
   if(input.value!=""){
    let prev=`Product ${k}-$${parseFloat(input.value).toFixed(2)}`;
    input.value="";
    product.forEach(item=>{
        k=k+1;
        const temp=item.innerText;
        item.innerText=prev;
        const str=temp;
        const value=str.match(/[\d.]+$/)[0];
        let price=parseFloat(value);
        prev=`Product ${k}-$${price.toFixed(2)}`;
        
    });
}
})