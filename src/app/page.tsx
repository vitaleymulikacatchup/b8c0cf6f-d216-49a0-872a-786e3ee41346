"use client";

import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import WalletFooter from '@/components/sections/layouts/footer/WalletFooter';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom 
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/design-a-simple-high-contrast-logo-for-m-1759320948049-a74989c2.jpg"
          logoWidth={120}
          logoHeight={40}
          buttonText="Buy MEME"
          onButtonClick={() => { /* Add functionality */ }}
          navItems={
            [
              { name: "MemeCoin", id: "#hero" },
              { name: "About", id: "#about" },
              { name: "How to Buy", id: "#how-to-buy" },
              { name: "Tokenomics", id: "#tokenomics" },
              { name: "Footer", id: "#footer" }
            ]
          }
        />
      </div>
      <div id="hero" data-section="hero">
        <VoidHero 
          title="MemeCoin: A New Trend in Crypto"
          description="Join the fun of memecoins with seamless buying steps!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="About MemeCoin"
          descriptions={[
            "MemeCoin is designed for fun and community-driven experiences.",
            "Easily engage with a playful vibe and innovative crypto experience."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics
          title="Tokenomics Overview"
          description="Our token distribution ensures a fair launch."
          kpiItems={[
            { value: "50M", description: "Total Supply", longDescription: "Total coins available for purchase.", icon: "Coin" },
            { value: "25%", description: "Liquidity", longDescription: "25% locked for liquidity purpose.", icon: "Lock" },
            { value: "10M", description: "Rewards", longDescription: "10 million for community rewards.", icon: "Star" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <WalletFooter
          logoText="MemeCoin"
          walletAddress="0x123456789abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
          copyrightText="© 2023 MemeCoin. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}