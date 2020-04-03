import React, { Component } from "react";
import "./HeaderImg.css";
import styled from "styled-components";

class HeaderImg extends Component {
  state = {
    obj: ""
  };

  showImage = () => {
    console.log("onLoad test");
    // {this.state.obj} :
  };

  render() {
    return (
      <div>
        <Container />
      </div>
      // <div onLoad = {this.showImage}>
      //         {/* <img src={mainImg} /> */}
      //         {/* <img src="uploadfile/kk_photo/main3.jpg" class="kk_slide" /> */}
      //         {/* <img src="uploadfile/kk_photo/main4.jpg" class="kk_slide" /> */}
      // </div>
    );
  }
}

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
`;

export default HeaderImg;
