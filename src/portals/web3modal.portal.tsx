import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { Web3Modal } from "@web3modal/react";
import { ethereumClient } from "../web3/chain";

import { useWeb3ModalStore } from "../store/web3Modal.store";

const Portal = ({ children }: any) => {
  return createPortal(children, document.getElementById("modal-portal")!);
};

export const ConnectWalletModal = () => {
  const { isOpen, toggleDrawer } = useWeb3ModalStore();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        isOpen && toggleDrawer();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen]);

  return (
    <Portal>
      <StyledModal ref={ref}>
        <Web3Modal
          projectId="2052fadc533edd004bcfe9bc3ac68527"
          ethereumClient={ethereumClient}
        />
      </StyledModal>
    </Portal>
  );
};

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  z-index: 100;
`;
