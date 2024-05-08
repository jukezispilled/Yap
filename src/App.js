import React, { useState } from 'react';
import './App.css';
import bgImage from './bg1.png'; // Import the background image
import Xlogo from './xlogo.jpg';
import TG from './tg.png';
import Marquee from "react-fast-marquee";
import TweetButton from './TweetButton';

function App() {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("H4p7HkzpiMHWe4W5Ld37TWzEYpEw6AwsTELGU4eTacAs");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  return (
    <div>
      <div className="bg-cover h-screen w-screen" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
        <div className="h-screen w-screen flex justify-center items-center">
          <div className='grid content-center'>
            <div className='flex justify-center'>
              <div className='h-20 bg-red-600 flex justify-center items-center rounded-xl w-min whitespace-nowrap px-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <p className='text-white text-2xl font-bold'>COMMUNITY TAKEOVER</p>
              </div>
            </div>
            <div className='text-9xl lg:text-[275px] font-bold text-center'>YAP</div>
            <div className='flex justify-center hover:scale-105 transition ease-in-out duration-200'>
              <a href="https://dexscreener.com/solana/5l9cpyxsygjwpxqm8b1hjghzcggrvr8gcd6ikorhmd3t" className='text-7xl text-center bg-black w-min py-2 px-5 rounded-xl font-semibold text-white'>
                BUY
              </a>
            </div>
            <div className='pt-8 text-center font-custom text-2xl flex justify-center -mt-3'>
                  <a href="https://twitter.com/YapCoinCTO" className='p-2 hover:scale-110 transition ease-in-out duration-200'><img src={Xlogo} alt='Xlogo' className='w-14 h-14 rounded-md'></img></a>
                  <a href="https://t.me/yapportalsol" className='p-2 hover:scale-110 transition ease-in-out duration-200'><img src={TG} alt='Tg logo' className='w-14 h-14'></img></a>
            </div>
          </div>
        </div>
      </div>
          <Marquee speed={90}>
            <div className='h-16 flex items-center text-[30px] lg:text-5xl font-custom whitespace-nowrap border-y-2 border-black font-bold'>$YAP $YAP $YAP $YAP $YAP $YAP $YAP $YAP $YAP $YAP $YAP $YAP $YAP $YAP $YAP $YAP $YAP&nbsp;</div>
          </Marquee>
          <div className='relative h-screen w-screen flex justify-center items-center'>
            <div className='absolute top-[10%] text-5xl md:text-6xl lg:text-8xl text-center font-bold'>YAP 4 $YAP</div>
            <TweetButton tweetText={"Get Yapping anon @YapCoinCTO"} solAddress={"<input SOL address here>"}/>
          </div>
          <div className='h-min w-screen flex justify-center bg-yellow-400'>
            <div className='grid w-full'>
              <div className='pt-[10%] font-custom text-5xl md:text-6xl lg:text-8xl text-center font-bold'>
                Tokenomics
              </div>
              <div className='flex justify-center w-full'>
                <div className='bg-black rounded-xl h-[300px] w-[75%] md:w-[65%] mt-[5%] mb-[5%]'>
                  <div className='w-full h-full flex justify-center items-center text-white font-custom text-4xl md:text-5xl lg:text-6xl'>
                    <div className='grid text-center font-semibold'>
                      Total Supply
                      <div className="text-center pt-[2%] text-2xl md:text-4xl mx-6">
                        1,000,000,000 $YAP
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center w-full'>
                <div className='bg-black rounded-xl h-[300px] w-[75%] md:w-[65%] mb-[10%]'>
                  <div className='w-full h-full flex justify-center items-center text-white font-custom text-4xl md:text-5xl lg:text-6xl'>
                    <div className='grid text-center font-semibold'>
                      Token Address
                      <div className="text-center pt-[2%] text-2xl md:text-4xl break-all mx-12">
                        H4p7HkzpiMHWe4W5Ld37TWzEYpEw6AwsTELGU4eTacAs
                      </div>
                      <div className='flex justify-center'>
                        <button
                          className="text-xl mt-2 p-2 w-min bg-gray-800 text-white rounded-md hover:bg-gray-600 transition ease-in-out duration-150"
                          onClick={handleCopy}
                        >
                          {copied ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default App;