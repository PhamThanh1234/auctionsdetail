import { useState } from "react";
import "./Cart.css"

function Cart(){
    const uniPrice = 120000;
    const [quantity, setQuantity]=useState(1);
    const handleChange = (e)=>{
        
        const updateQuantity = parseInt(e.target.value)
        setQuantity(updateQuantity);
    }
    return(
        <table className="cart">
         <thead>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
            </tr>
         </thead>
         <tbody>
         <tr>
                <th>Giày thể thao nam cao cấp</th>
                <th>
                    <input defaultValue={quantity} type="number" min={1} onChange={handleChange}></input>
                </th>
                <th>{uniPrice}đ</th>
                <th>{uniPrice*quantity}đ</th>
            </tr>
         </tbody>
        </table>
    );
}
export default Cart;