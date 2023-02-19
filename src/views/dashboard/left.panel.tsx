import { useWeb3Modal } from "@web3modal/react";
import React from "react";

// importing logos
import { AiFillHome, AiFillCopy } from "react-icons/ai";
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
  const {open} = useWeb3Modal();
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
      icon: <RiLogoutBoxRLine />,
      name: "Disconnect",
      onClick: async () => await open(),
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
              onClick={() => item.onClick ? item.onClick() : handlePanelChange(item.panel)}
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy9HjA-dO0Evv94Z3D9-rKQpmrRsEQEwuFyazGc-qw9xl8mZN_pYOvtglykt38dIv6UCY&usqp=CAU" alt="profile" />
        </div>
        <div className="profile-info">
          <h2>Wallet Connected</h2>
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
