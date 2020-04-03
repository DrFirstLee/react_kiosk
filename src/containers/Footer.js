import React, { Component } from "react";
import { Table } from "reactstrap";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { marketList } = this.props.marketList;
    const market = marketList.map((info, index) => (
      <tr key={index++}>
        <th>{index}</th>
        <td>{info.title}</td>
        <td>{info.menuName}</td>
        <td>{info.price}</td>
      </tr>
    ));
    return (
      <div className="footer">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>메뉴항목 </th>
              <th>메뉴이름</th>
              <th>가 격</th>
            </tr>
          </thead>
          <tbody>{market}</tbody>
        </Table>
      </div>
    );
  }
}

export default Footer;
