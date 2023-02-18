import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

import { WagmiConfig } from "wagmi";
import { wagmiClient } from "./web3/chain";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RouterProvider router={routes} />
    </WagmiConfig>
  </React.StrictMode>
);
