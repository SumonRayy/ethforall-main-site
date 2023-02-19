import React from "react";
import NavBar from "../../components/nav/NavBar";
import LinearMandalaWhite from "../../assets/images/svgs/linear-mandala";

import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();

  const handleClick = async () => {
    try {
      if (isConnected) {
        navigate("/verify");
      } else {
        await open();
      }
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
        <button onClick={handleClick}>{isConnected ? `Get Started` : 'Connect Wallet'}</button>
      </h1>
    </>
  );
}
