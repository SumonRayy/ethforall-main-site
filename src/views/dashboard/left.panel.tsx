import React from "react";

// importing logos
import { AiFillHome, AiFillFileAdd, AiFillCopy } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { MdRemoveShoppingCart } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";

// importing interfaces
import {
  ILeftPanelListItem,
  ILeftPanelProps,
} from "../../interfaces/dashboard.interfaces";

// main component
function LeftPanel(props: ILeftPanelProps) {
  const { currentPanel, setCurrentPanel } = props; // destructuring props

  // function to change panel
  const handlePanelChange = (panel: number) => {
    setCurrentPanel(panel);
  };

  // list of items in left panel
  const leftPanelList: ILeftPanelListItem[] = [
    {
      icon: <AiFillHome />,
      name: "Home",
      panel: 1,
    },
    {
      icon: <BsFillGearFill />,
      name: "Manage SBT",
      panel: 2,
    },
    {
      icon: <MdRemoveShoppingCart />,
      name: "Close Shop",
      panel: 3,
    },
    {
      icon: <AiFillFileAdd />,
      name: "New Something",
      panel: 4,
    },
    {
      icon: <RiLogoutBoxRLine />,
      name: "Disconnect",
      panel: 5,
    },
  ];

  // function to render left panel list
  const RenderLeftPanelList = () => {
    return (
      <ul>
        {leftPanelList.map((item, index) => {
          return (
            <li
              key={index}
              className={currentPanel === item.panel ? "active" : ""}
              onClick={() => handlePanelChange(item.panel)}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="left-panel">
      <div className="left-panel__top">
        <div className="profile-image">
          <img src="https://i.pravatar.cc/150?img=5" alt="profile" />
        </div>
        <div className="profile-info">
          <h1>Jenny Lane</h1>
          <h2>Wallet Connect</h2>
          <span>
            {"0x42E51D720BC438DB8F3571128579283D276B21BB".slice(0, 20) +
              "..." +
              "0x42E51D720BC438DB8F3571128579283D276B21BB".slice(38)}
            <AiFillCopy />
          </span>
        </div>
      </div>
      <div className="left-panel__bottom">
        <RenderLeftPanelList />
      </div>
      <span
        style={{ margin: " 0 0 1rem 0", fontSize: "0.8rem" }}
        className="footer"
      >
        Made with <span>❤</span> by GG
      </span>
    </div>
  );
}

export default LeftPanel;
