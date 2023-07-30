function filterDisplay(data,filter)
{

if(filter == 'name')
{   
    data.sort((a,b) => a.title.localeCompare(b.title));
}
else if (filter == 'pricelth')
{
    data.sort((a,b) => a.price-b.price);
}
else if (filter == 'pricehtl')
{
    data.sort((a,b) => b.price-a.price);
}

}
export default filterDisplay