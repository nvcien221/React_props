import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    const { displayCart,closeCart,productDetail} = this.props;
    console.log("SP chọn ", productDetail);
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
            </div>
            <div className="cart-content-bot">
                <div className="sub-total">
                <p style={{fontSize: 30}}>Tạm tính: <span id="totalPrice" style={{marginRight: 10}} />$</p>
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
