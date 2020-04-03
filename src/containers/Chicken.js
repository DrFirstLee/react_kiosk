import React, { Component } from "react";
import MainMenu from "./MainMenu";
import { Row, Col, Container } from "reactstrap";

class Chicken extends Component {
  state = {
    menuList: [
      {
        id: 0,
        menuImg: "ddd",
        menuName: "치킨1번메뉴",
        menuSubTitle: "치킨 부가설명1",
        price: "16000"
      },
      {
        id: 1,
        menuImg: "ddd",
        menuName: "치킨2번메뉴",
        menuSubTitle: "치킨 부가설명2",
        price: "11000"
      }
    ]
  };

  render() {
    const data = this.state.menuList;
    const menuList = data.map(info => (
      <Col className="item" key={info.id}>
        <MainMenu info={info} />
      </Col>
    ));
    return (
      <div>
        <Container fluid>
          <Row xs="4">{menuList}</Row>
        </Container>
      </div>
    );
  }
}

export default Chicken;
