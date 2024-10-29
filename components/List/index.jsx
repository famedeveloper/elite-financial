"use client"
import React, { useState, useEffect } from 'react';

const BiddersList = () => {
  const [bidders, setBidders] = useState([]);
  const [bidderCount, setBidderCount] = useState(1);

  const addBidder = () => {
    const newBidders = [...bidders, `Bidder ${bidderCount}`];
    setBidders(newBidders);
    setBidderCount(bidderCount + 1);

    setTimeout(() => {
      const boxes = document.querySelectorAll('.bidder-box');
      boxes[boxes.length - 1].classList.add('bidder-box-enter');
    }, 10);
  };

  return (
    <div>
      <button onClick={addBidder}>Add Bidder</button>
      <div className="bidders-container">
        {bidders.map((bidder, index) => (
          <div key={index} className="bidder-box">
            {bidder}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiddersList;
