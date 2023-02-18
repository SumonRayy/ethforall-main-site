import React from "react";
import NavBar from "../../components/nav/NavBar";
import LinearMandalaWhite from "../../assets/images/svgs/linear-mandala";

import { useWeb3Modal } from "@web3modal/react";
import { useWeb3ModalStore } from "../../store/web3Modal.store";

export default function HeroSection() {
  const { open } = useWeb3Modal();
  const { toggleDrawer } = useWeb3ModalStore();

  const handleClick = async () => {
    try {
      toggleDrawer();
      await open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="hero-logo">
        <LinearMandalaWhite />
      </div>
      <h1>
        zk-IDs for EVERYone, on ANY Chain
        <button onClick={handleClick}>Connect Wallet</button>
      </h1>
    </>
  );
}
