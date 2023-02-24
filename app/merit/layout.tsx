"use client"
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public'
import {mainnet, polygon, bscTestnet} from 'wagmi/chains'


const { chains, provider } = configureChains(
  [bscTestnet], // you can add more chains here like chain.mainnet, chain.optimism etc.
  [
    jsonRpcProvider({
      rpc: () => {
        return {
          http: 'https://rpc.ankr.com/bsc_testnet_chapel', // go to https://www.ankr.com/protocol/ to get a free RPC for your network if you're not using Polygon
        };
      },
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Cyber Tube',
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  
  
  

  return (
    <section>
       <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} modalSize="compact">
      {children}
      </RainbowKitProvider>
      </WagmiConfig>
      </section>
      
   
  )
}
