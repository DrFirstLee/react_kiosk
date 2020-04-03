import React, { Component } from "react";
import { Route, IndexRoute } from "react-router-dom";
import Header from "./containers/Header.js";
import Home from "./containers/Home.js";
import Chicken from "./containers/Chicken";
import Footer from "./containers/Footer.js";

class App extends Component {
  state = {
    marketList: [],
    marketPrice: "",
    menu: [
      {
        category: "home",
        menulist: [
          {
            id: 0,
            menuImg:
              "https://image.edaily.co.kr/images/photo/files/NP/S/2016/05/PS16052400080.jpg",
            menuName: "1번메뉴",
            menuSubTitle: "부가설명1",
            price: "18000"
          },
          {
            id: 1,
            menuImg:
              "https://image.edaily.co.kr/images/photo/files/NP/S/2016/05/PS16052400081.jpg",
            menuName: "2번메뉴",
            menuSubTitle: "부가설명2",
            price: "15000"
          },
          {
            id: 2,
            menuImg:
              "https://image.edaily.co.kr/images/photo/files/NP/S/2016/05/PS16052400075.jpg",
            menuName: "3번메뉴",
            menuSubTitle: "부가설명3",
            price: "13000"
          },
          {
            id: 3,
            menuImg:
              "https://image.edaily.co.kr/images/photo/files/NP/S/2016/05/PS16052400077.jpg",
            menuName: "4번메뉴",
            menuSubTitle: "부가설명4",
            price: "11000"
          }
        ]
      },
      {
        category: "premium",
        menulist: [
          {
            id: 0,
            menuImg:
              "https://image.edaily.co.kr/images/photo/files/NP/S/2016/05/PS16052400078.jpg",
            menuName: "프리미엄1번메뉴",
            menuSubTitle: "프리미엄부가설명1",
            price: "22000"
          },
          {
            id: 1,
            menuImg: "ddd",
            menuName: "프리미엄2번메뉴",
            menuSubTitle: "프리미엄부가설명2",
            price: "12000"
          }
        ]
      },
      {
        category: "allday",
        menulist: [
          {
            id: 0,
            menuImg: "/image/blue.png",
            menuName: "올데이 1번메뉴",
            menuSubTitle: "올데이 부가설명1",
            price: "18000"
          },
          {
            id: 1,
            menuImg:
              "https://image.edaily.co.kr/images/photo/files/NP/S/2016/05/PS16052400079.jpg",
            menuName: "올데이 2번메뉴",
            menuSubTitle: "올데이 부가설명2",
            price: "17000"
          }
        ]
      },
      {
        category: "whaper",
        menulist: [
          {
            id: 0,
            menuImg:
              "https://image.edaily.co.kr/images/photo/files/NP/S/2016/05/PS16052400080.jpg",
            menuName: "와퍼1번메뉴",
            menuSubTitle: "부가설명1와퍼",
            price: "10000"
          },
          {
            id: 1,
            menuImg:
              "https://image.edaily.co.kr/images/photo/files/NP/S/2016/05/PS16052400081.jpg",
            menuName: "와퍼2번메뉴",
            menuSubTitle: "부가설명2와퍼",
            price: "11000"
          }
        ]
      },
      {
        category: "side",
        menulist: [
          {
            id: 0,
            menuImg:
              "https://image.edaily.co.kr/images/photo/files/NP/S/2016/05/PS16052400076.jpg",
            menuName: "올데이 1번메뉴",
            menuSubTitle: "올데이 부가설명1",
            price: "18000"
          },
          {
            id: 1,
            menuImg:
              "https://image.edaily.co.kr/images/photo/files/NP/S/2016/05/PS16052400079.jpg",
            menuName: "올데이 2번메뉴",
            menuSubTitle: "올데이 부가설명2",
            price: "17000"
          }
        ]
      }
    ]
  };

  updateMarket = (title, item) => {
    console.log("장바구니 담기 클릭" + item.id + "/" + title);
    const { marketList } = this.state;
    this.setState({
      marketList: marketList.concat({ title: title, ...item })
    });
    console.log("장바구니 데이터: " + marketList);
  };

  render() {
    let menu = this.state.menu;
    let menuList = menu.map((item, index) => (
      <Route
        exact
        key={index}
        path={"/" + item.category}
        render={() => (
          <Home
            title={item.category}
            updateMarket={this.updateMarket}
            menuList={item.menulist}
          />
        )}
      />
    ));

    console.log(this.state.title);
    return (
      <div /* style={{ height: "800px" }} */>
        <Header />
        {menuList}
        <Route exact path="/chicken" component={Chicken} />
        <Footer marketList={this.state} />
      </div>
    );
  }
}

export default App;
