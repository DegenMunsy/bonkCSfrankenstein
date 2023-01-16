import React from "react";

// import "./App.css";
// import Bonks from "./Bonks";
import logo from "./assets/logo.jpg";
import banner from "./assets/banner.png";
import { useWallet } from "@solana/wallet-adapter-react";
import {

  useWalletModal,
} from "@solana/wallet-adapter-react-ui";
// Default styles that can be overridden by your app

require("@solana/wallet-adapter-react-ui/styles.css");

function Home() {
  const wallet = useWallet();
  const { setVisible } = useWalletModal();

  const connect = () => {
    setVisible(true);
  };

  //  #f38b0b #f9c507 #a95627 #e6dcd3 #4e3b24
  return (
    <div>
      <div>
        <nav className="relative sticky top-0 z-navbar pointer-events-none">
          <div className="absolute mt-6 w-full">
            <div className="flex flex-row gap-4 justify-between px-4">
              <a
                className="flex-shrink-0 w-20 h-20 sm:w-12 sm:h-20 xl:w-20 xl:h-20 rounded-full align-middle justify-center p-3 sm:p-3 xl:p-3 bg-[#6b1d6e]"
                href="#"
              >
                <img
                  className="w-auto h-auto"
                  src={banner}
                  alt=""
                />
              </a>

              <div className="hidden sm:flex rounded-full ml-auto font-lilita text-xs uppercase pointer-events-auto bg-[#6b1d6e] text-white">
                <div
                  className="flex gap-2 h-full my-auto mx-3 align-middle items-center"
                  style={{}}
                >
                  <div
                    className="rounded-full text-base xl:text-lg hover:bg-[#7a376e] hover:text-white cursor-pointer px-4 py-1 tracking-wider"
                    style={{}}
                  >
                    Dojo
                  </div>
                  <div className="rounded-full text-base xl:text-lg hover:bg-[#7a376e] hover:text-white cursor-pointer px-4 py-1 tracking-wider">
                    Staking
                  </div>
                  <div
                    className="rounded-full text-base xl:text-lg hover:bg-[#7a376e] hover:text-white cursor-pointer px-4 py-1 tracking-wider"
                    style={{}}
                  >
                    Merch
                  </div>
                  <div className="rounded-full text-base xl:text-lg hover:bg-[#7a376e] hover:text-white cursor-pointer px-4 py-1 tracking-wider">
                    Magic Eden
                  </div>
                </div>
              </div>
              <div className="flex flex-shrink-0 pointer-events-auto font-lilita mx-6 sm:mx-0">
                {wallet.connected ? (
                  <button className="hidden sm:flex flex-row rounded-full items-center w-full h-full justify-center py-2.5 px-4 leading-loose text-lg sm:text-base xl:text-lg uppercase bg-[#6b1d6e] text-white hover:[#7a376e] hover:text-white">
                    Mint NFT
                  </button>
                ) : (
                  <button
                    className="hidden sm:flex flex-row rounded-full items-center w-full h-full justify-center py-2.5 px-4 leading-loose text-lg sm:text-base xl:text-lg uppercase bg-[#6b1d6e] text-white hover:bg-[#7a376e] hover:text-white"
                    onClick={connect}
                  >
                    Connect wallet
                  </button>
                )}
              </div>
             
            </div>
          </div>
        </nav>
      </div>
      
    </div>
  );
}

export default Home;
