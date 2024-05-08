import React from 'react';

const TweetButton = ({ tweetText, solAddress }) => {
  const handleTweet = () => {
    const fullTweetText = `${tweetText}\n\n${solAddress}`; // Concatenate tweet text, two lines space, and SOL address

    const encodedTweetText = encodeURIComponent(fullTweetText); // Encode the tweet text

    // Construct the Twitter Web Intent URL
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedTweetText}`;

    // Open the Twitter compose window in a new tab
    window.open(tweetUrl, '_blank');
  };

  return (
    <button onClick={handleTweet} className="font-custom bg-red-600  text-white font-semibold py-3 px-5 rounded-xl text-7xl hover:scale-105 transition ease-in-out duration-200">
      YAP #1
    </button>
  );
};

export default TweetButton;