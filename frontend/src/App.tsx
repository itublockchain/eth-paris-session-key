import { useInitialTheme } from "hooks/useInitialTheme";
import { Main } from "pages";
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { foundry, goerli, mainnet } from "wagmi/chains";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const walletConnectProjectId = "5d2bcc3aee4782901664d9069ae1f939";

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    ...(process.env.NODE_ENV === "development" ? [goerli, foundry] : []),
  ],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! }),
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
        <RainbowKitProvider chains={chains}>
          <Main />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
