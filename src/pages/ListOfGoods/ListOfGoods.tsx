import * as React from "react";
import "./ListOfGoods.scss";

const goodsList = [
    {
      brand: "apple",
      name: "iphone7",
      color: "blank",
      price: "6388"
    },
    {
      brand: "apple",
      name: "iphone7 plus",
      color: "blank",
      price: "6388"
    },{
      brand: "apple",
      name: "iphone8",
      color: "blank",
      price: "6388"
    },{
      brand: "apple",
      name: "iphone8 plus",
      color: "blank",
      price: "6388"
    },{
      brand: "apple",
      name: "iphone7 plus",
      color: "blank",
      price: "6388"
    }
]

export default class ListOfGoods extends React.Component<any, any> {

  
  constructor(props: any) {
    super(props);
    this.state = {

    }
  }

  public render() {
    return (
      <div className="list-of-goods">商品列表</div>
    )
  }
}