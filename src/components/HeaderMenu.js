import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { BrowserRouter as Router, Link } from "react-router-dom";

const HeaderMenu = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <Link to="Home">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              스페셜
            </NavLink>
          </NavItem>
        </Link>

        <Link to="premium">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              프리미엄
            </NavLink>
          </NavItem>
        </Link>
        <Link to="whaper">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              와퍼&세트
            </NavLink>
          </NavItem>
        </Link>
        <Link to="allday">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              올데이킹
            </NavLink>
          </NavItem>
        </Link>
        <Link to="chicken">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "5" })}
              onClick={() => {
                toggle("5");
              }}
            >
              치킨버거
            </NavLink>
          </NavItem>
        </Link>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "6" })}
            onClick={() => {
              toggle("6");
            }}
          >
            사이드
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "7" })}
            onClick={() => {
              toggle("7");
            }}
          >
            음료
          </NavLink>
        </NavItem>
      </Nav>

      {/* <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="6">
              <h4>Tab 1 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent> */}
    </div>
  );
};

export default HeaderMenu;
