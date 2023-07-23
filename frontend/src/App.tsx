import { useInitialTheme } from "hooks/useInitialTheme";
import { Main, CardSession } from "pages";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { foundry, goerli, arbitrumGoerli, gnosisChiado } from "wagmi/chains";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { PATHS } from "constants/paths";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
const walletConnectProjectId = "5d2bcc3aee4782901664d9069ae1f939";

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli, arbitrumGoerli, foundry, gnosisChiado],
  [
    alchemyProvider({ apiKey: "yexj2dnIh9Y9suGg5XdHEzxwUB8uFUCg" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Session Key App",
  projectId: walletConnectProjectId,
  chains,
});

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function App() {
  useInitialTheme();
  return (
    <div>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains} coolMode={true}>
          <BrowserRouter>
            <Routes>
              <Route path={PATHS.fight} element={<Main />} />
              <Route path={PATHS.enter} element={<CardSession />} />

              <Route
                path="*"
                element={<Navigate to={PATHS.enter}></Navigate>}
              />
            </Routes>
            <NavigationAnimator />
          </BrowserRouter>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

const NavigationAnimator = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.animate([{ opacity: 0.8 }, { opacity: 1 }], {
      duration: 200,
      fill: "forwards",
    });
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
};

export default App;
