import React, { Component } from 'react'

export default class Modal extends Component {
    
  render() {
    const { productDetail, displayModal, closeModal } = this.props;
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            width: "100%",
            opacity: 0.97,
            zIndex: "99",
            background:"#000000ba",
            boxShadow:" 1px 1px 4px 0 rgba(0, 0, 0, 0.1)",
            display: displayModal ? 'block' : 'none',
        }}>
            <div style={{
                    position: "absolute",
                    right: "15%",
                    top: "20%",
                    width:"70%",
                    height: "65%",
                    transition: "all 0.2s",
                    fontSize: "25px",
                    backgroundColor: "#fff",
                    opacity: 1,
            }}>
                <div className="close" style={{
                    display: "block",
                }}>
                    <i 
                    onClick={closeModal}
                    className="fa-solid fa-xmark" />
                </div>

                 <div className="row p-4">
                    <div className="col-4">
                        <h2>{productDetail?.name}</h2> 
                        <img style={{
                            width: "100%"
                        }} src={productDetail?.image} alt="" />
                    </div>

                    <div className="col-8">
                        <h2>Thông tin chi tiết</h2>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td>Tên sản phẩm: </td>
                                    <td>{productDetail?.name}</td>
                                </tr>
                                <tr>
                                    <td>Giá: </td>
                                    <td>{productDetail?.price}</td>
                                </tr>
                                <tr>
                                    <td>Mô tả: </td>
                                    <td>{productDetail?.shortDescription}</td>
                                </tr>
                                <tr>
                                    <td>Số lượng: </td>
                                    <td>{productDetail?.quantity}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                 </div>

            </div>
        </div>
    )
  }
}
