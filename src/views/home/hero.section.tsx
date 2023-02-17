import React from 'react';
import NavBar from '../../components/nav/NavBar';
import LinearMandalaWhite from "../../assets/images/svgs/linear-mandala";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();
  return (
    <>
    <NavBar />
        <div className="hero-logo">
          <LinearMandalaWhite />
        </div>
        <h1>
          zk-IDs for EVERYone, on ANY Chain
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Connect Wallet
          </button>
        </h1>
    </>
  );
}
