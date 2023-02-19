import React from "react";
import LinearMandalaWhite from "../../assets/images/svgs/linear-mandala";

function DashboardHome() {
  return (
    <>
      <div className="right-panel__top">
        <h1>Welcome to Parichay</h1>
        <p>Your one stop solution to trust in a trustless world.</p>
        <LinearMandalaWhite />
      </div>
      <div className="right-panel__bottom">
        <div className="right-panel__bottom__left">
          <h1>Wallet</h1>
          <div className="panel-item">
            <p>Balance</p>
            <h3>
              <span>0</span> SBT
            </h3>
          </div>
        </div>
        <div className="right-panel__bottom__right">
          <h1>Chain Presence</h1>
          <ul>
            <li>
              1. <span>Polygon Mumbai</span>
            </li>
            <li>
              2. <span>Goerli</span>
            </li>
            <li>
              3. <span>Mantle</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
