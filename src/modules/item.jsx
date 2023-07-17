import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const { urlItem, name, price, setStateModal, setStateCart } = this.props;

    return (
      <div className="card col-3" style={{ width: '250px', position: 'relative', }}>
        <div style={{
            border:  "1px solid rgba(0,0,0,.125)",
            padding: 2,
            borderRadius: "5px",
        }}>

        <img src={urlItem} className="card-img-top" alt="..." />
        <div className="card-body px-3">
          <h5 
          style={{
            fontSize: 16,
            fontWeight: 700,
          }}
          className="card-title">{name}</h5>
          <p className="card-text" style={{ fontSize: 20 }}>{price} $</p>
          <div 
          className="row">
            <button 
             onClick={()=>setStateCart()}
            href="#" className="btn btn-primary col-8">
              <div >
              <span>Add to cart</span>
              <i className="fa-solid fa-cart-plus btnAddCart"></i>
              </div>
            </button>
            
            <button              style={{
              marginLeft: "20px",
            }}
              onClick={() => setStateModal()}
              className="btn btn-success col-3"
            >
              <div >
                Show
              </div>
              
            </button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}





