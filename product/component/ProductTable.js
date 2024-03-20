import Product from "./Product";

export default function ProductTable() {
    const productlist=[
        {id:1,productName:"세정제",price:100,imageFileName:"a1.png",active:"on"},
        {id:2,productName:"상추",price:200,imageFileName:"a2.png",active:"on"},
        {id:3,productName:"빵",price:300,imageFileName:"a3.png",active:"on"},
        {id:4,productName:"콜라",price:400,imageFileName:"a4.png",active:"off"},
    ]
    let products=[];
    productlist.forEach(p=> {
        productlist.push(<Product product={p}></Product>)
    })
    return (
        <table>
            {products}
        </table>
    )
}