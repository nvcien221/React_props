import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    const { displayCart,closeCart,productDetail ,gioHang} = this.props;
    console.log("SP chọn ", productDetail);
    let totalPrice =0;

    return (
        <div className="modal-cart"
        style={{
            display: displayCart ? 'block' : 'none',
        }}
        >
        <div className="modal-cart-content">
            <button onClick={closeCart}>
            <span className="close"><i className="fa-solid fa-xmark" /></span>
            </button>
            <div className="wrap-cart-content">
            <div className="list-items" id="showCart">
                <table className='table text-center ' >
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='table'>
                        {
                            gioHang.map((sp,index)=>{
                                totalPrice += sp.soLuong * sp.price;
                                return (
                                    <tr key={index}>
                                    <td>{sp.id}</td>
                                    <td>
                                        <img style={{
                                            width: 120,
                                            height: 110,
                                            
                                        }} src={sp.image} />
                                    </td>
                                    <td>
                                        <button className='btn btn-success'>+</button>
                                        <span style={{
                                            fontSize: 24,
                                            margin: "0 10px",
                                        }}>{sp.soLuong}</span>
                                        <button className='btn btn-success'>-</button>
                                    </td>
                                    <td>{sp.soLuong * sp.price}$</td>
                                    <td>
                                        <button className='btn btn-danger'>Xóa</button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="cart-content-bot">
                <div className="sub-total">
                <p style={{fontSize: 30,}}>Tạm tính: <span style={{
                    color:"red", marginLeft:"5px", fontSize: 30}}> {totalPrice}</span> <span id="totalPrice" style={{marginRight: 10}} />$</p>
                </div>
                <div className="gr-button">
                <a href="#list-product" className="hide" onclick="continueShopping()" style={{transitionDuration: '2s'}}>
                    <button>Tiếp tục mua hàng</button>
                </a>
                <a href="#" className="hide">
                    <button>Thanh toán</button>
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
  }
}
