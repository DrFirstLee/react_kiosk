import React, { Component } from "react";
import MainMenu from "./MainMenu";
import { Row, Container } from "reactstrap";

class Home extends Component {
  updateMarket = (title, item) => {
    this.props.updateMarket(title, item);
  };

  render() {
    const data = this.props.menuList;
    const title = this.props.title;
    const menuList = data.map(info => (
      <MainMenu
        info={info}
        key={info.id}
        title={title}
        updateMarket={this.updateMarket}
      />
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

export default Home;
