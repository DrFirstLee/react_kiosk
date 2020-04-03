import React, { Component } from "react";
import { Col } from "reactstrap";

class MainMenu extends Component {
  menuClick = e => {
    const { title, info } = this.props;
    this.props.updateMarket(title, info);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return false; //장바구니에 담기하는데 자꾸 렌더링되기때문에 차단
  }

  render() {
    const style = {
      border: "1px solid gray"
      // padding: "8px",
      // margin: "8px"
    };
    const { menuImg, menuName, menuSubTitle, price } = this.props.info;
    console.log("이미지뷰: " + menuImg);
    return (
      <Col className="item" style={{ padding: 0 }}>
        <div style={style} onClick={this.menuClick}>
          <img alt="" src={menuImg} style={{ width: "100%" }} />
          <h4>
            {/* {menuImg} */}
            <p>{menuName}</p>
            <p>{menuSubTitle}</p>
            <p>{price}</p>
          </h4>
        </div>
      </Col>
    );
  }
}

export default MainMenu;
