function subtotal(cartArr)
{
let sum = 0;
cartArr.map((item)=>{
    sum += item.price * item.quantity
})
return sum;
}
export default subtotal