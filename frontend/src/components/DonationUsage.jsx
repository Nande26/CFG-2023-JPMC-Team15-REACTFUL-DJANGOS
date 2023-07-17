import React from "react";

const DonationUsage = ({ donationUsage }) => {
  return (
    <div className="">
      {donationUsage.name}: {donationUsage.amountUsed}
    </div>
  );
};

export default DonationUsage;
