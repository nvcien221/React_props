import React, { Component } from 'react';
import Title from './title';
import Item from './item';
import Modal from './modal';
import Cart from './cart';
const listItem = 
[
    {
      
      id: 1,

soLuong: 1,      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
    },
    {
      id: 2,

soLuong: 1,      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
    },
    {
      id: 3,

soLuong: 1,      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
    },
    {
      id: 4,

soLuong: 1,      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
    },
    {
      id: 5,

soLuong: 1,      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png"
    },
    {
      id: 6,

soLuong: 1,      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
    },
    {
      id: 7,

soLuong: 1,      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
    },
    {
      id: 8,

soLuong: 1,      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
    },
    {
      id: 9,

soLuong: 1,      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
    },
    {
      id: 10,
      soLuong: 1,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png"
    },
    {
      id: 11,
      soLuong: 1,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
    },
    {
      id: 12,
      soLuong: 1,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description: "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
    } 
  ];

export default class ShoesStore extends Component {
  state = {
    displayCart : false,
    displayModal: false,
    productDetail: null,
    gioHang : [],
  };


  toggleModal = () => {
    this.setState({
      displayModal: true,
    });
  };

  closeModal = () => {
    this.setState({ displayModal: false,
      productDetail: null,
     });
  };

  setStateModal = (product) => {
    this.setState({
       productDetail: product,
       displayModal : true,
    
    });
  };

  // setStateCart = (product) => {
  //   const sanPham = this.state.gioHang.find((item) => item.id === product.id);
    
  //   console.log("SP trùng",sanPham);
  //   if(sanPham){
  //     const indexFind = sanPham.id;
  //     sanPham.soLuong+=1;
  //     this.state.gioHang.splice(indexFind,1,product);
  //     this.setState({
  //       productDetail: product,
  //       displayCart: true, 
  //       gioHang : [...this.state.gioHang],
  //     });
  //   }else{
  //     this.setState({
  //       productDetail: product,
  //       displayCart: true, 
  //       gioHang : [...this.state.gioHang,product],
  //     });
  //   }
  // };
  setStateCart = (product) => {
    const { gioHang } = this.state;
    const index = gioHang.findIndex((item) => item.id === product.id);
  
    if (index !== -1) {
      gioHang[index].soLuong += 1;
      this.setState({
        gioHang: [...gioHang],
      });
    } else {
      const newProduct = { ...product, soLuong: 1 };
      this.setState({
        gioHang: [...gioHang, newProduct],
      });
    }
    this.setState({
      productDetail: product,
      displayCart: true,
    });
  };

  toggleCart = () => {
    this.setState({
      displayCart: true,
    });
  };

  closeCart = () => {
    this.setState({ displayCart: false,
      productDetail: null,
     });
  };


  changeQuantity = ({ quantity, id }) => {
    const { gioHang } = this.state;
    const index = gioHang.findIndex((item) => item.id === id);
  
    if (index !== -1) {
      const newGioHang = [...gioHang];
      const sanPham = newGioHang[index];
      if (sanPham.soLuong === 1 && quantity === -1) {
        if(window.confirm("Bạn có chắc chắn muốn xóa hay không!")){
          newGioHang.splice(index, 1);
        }

      } else {
        sanPham.soLuong += quantity;
      }
      this.setState({
        gioHang: newGioHang,
      });
    }
  
    this.setState({
      productDetail: null,
      displayCart: true,
    });
  };

  deleteSP = (id)=>{
    const { gioHang } = this.state;
    const index = gioHang.findIndex((item) => item.id === id);
    gioHang.splice(index,1);
    console.log(gioHang);
    this.setState({
      gioHang : [...gioHang],
    })
  }



  render() {
    return (
      <>
        <Title/>
        <ProductList 
        setStateCart ={this.setStateCart}
        setStateModal={this.setStateModal}
        >
        
        </ProductList>
        <Modal content = {this.setStateModal}
                displayModal={this.state.displayModal}
                toggleModal={this.toggleModal}
                productDetail={this.state.productDetail}
                closeModal = {this.closeModal}
        />
        <Cart 
        displayCart = {this.state.displayCart}
        toggleCart = {this.toggleCart}
        closeCart = {this.closeCart}
        setStateCart = {this.setStateCart}
        productDetail={this.state.productDetail}
        gioHang = {this.state.gioHang}
        changeQuantity = {this.changeQuantity}
        deleteSP = {this.deleteSP}
        />
      </>
    )
  }
}

class ProductList extends Component{
  render(){
    return(
      <div className='container'>
      <div className='mt-5 row pb-5' style={{
        
      }}>
        {
          listItem.map((item)=>{
            return <Item 
            setStateCart={() => this.props.setStateCart(item)}
            setStateModal={() => this.props.setStateModal(item)}
            urlItem = {item.image} name = {item.name} price = {item.price} key={item.id} />
          })
        }
      </div>
      </div>
    )
  }
}


