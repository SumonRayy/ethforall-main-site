import React from "react";
import LinearMandalaWhite from "../../assets/images/svgs/linear-mandala";

function DashboardHome() {
  return (
    <>
      <div className="right-panel__top">
        <h1>Welcome to Parichay</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
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
          <div className="panel-item">
            <p>Balance</p>
            <h3>
              <span>0</span> SBT
            </h3>
          </div>
          <div className="panel-item">
            <p>Balance</p>
            <h3>
              <span>0</span> SBT
            </h3>
          </div>
        </div>
        <div className="right-panel__bottom__right">
          <h1>Chain IDs</h1>
          <ul>
            <li>
              1. <span>Chain ID: alpha</span>
            </li>
            <li>
              2. <span>Chain ID: beta</span>
            </li>
            <li>
              3. <span>Chain ID: gama</span>
            </li>
            <li>
              4. <span>Chain ID: theta</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DashboardHome;
