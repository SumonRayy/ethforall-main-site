import React from "react";
import { Outlet } from "react-router-dom";

import { IRightPanelProps } from "../../interfaces/dashboard.interfaces";

function RightPanel(props: IRightPanelProps) {
  const { currentPanel } = props;

  return (
    <div className="right-panel">
      <Outlet />
    </div>
  );
}

export default RightPanel;
