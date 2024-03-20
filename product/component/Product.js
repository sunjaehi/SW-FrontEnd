import {useState} from "react";
import styles from './Product.module.css';

export default function Product({product}) {
    const [active, setActive]=useState(product.active);
    const [price,setPrice]=useState(product.price);

    function changeActive(event) {
        (event.target.checked===true) ?setActive("on") : setActive("off");
    }
    function changePrice() {
        setPrice(Number(prompt("변경할 가격을 입력하세요")))
    }
    return (
        <tr key={product.id} className={(active==="on") ? styles.onSale :styles.offSale}>
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{price}</td>
            <td><img className={styles.ProductImage} src={product.imageFileName} alt="상품이미지"></img></td>
            <td>{(active==="on")?"판매중":"판매중지"}</td>
            <td><input type="checkbox" onChange={changeActive} checked={(active==="on")?true:false}></input></td>
            <td><button onClick={changePrice}>가격변경</button></td>
        </tr>
    )
}