import React from "react";
import Amazon_logo from "../../assets/Amazon_logo.svg.png";

const CheckoutHeader = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "10vh",
        background: "linear-gradient(to bottom, #fff, #ededed)",
        margin: " 0  25px ",
        textAlign: "center",
        boxShadow: " 0px 1px 0px #a6a5a5",
      }}
    >
      <div
        style={{
          float: "left",
          paddingTop: "0.5rem",
          margin: "1.5rem 0 0 1.2rem",
          height: "55%",
          width: "30%",
        }}
      >
        <img
          src={Amazon_logo}
          alt="amazon-logo"
          style={{
            height: "100%",
          }}
        />
      </div>
      <div
        style={{
          width: "70%",
          textAlign: "center",
          paddingTop: "1.3rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
          }}
        >
          Checkout (
          <span style={{ color: "#007185", fontSize: "1.4rem" }}>1 item</span>)
        </h2>
      </div>
    </div>
  );
};

export default CheckoutHeader;
