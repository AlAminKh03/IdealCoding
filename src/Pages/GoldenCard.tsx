import React from "react";
import Card from "../Components/Card";

type Props = {};

const GoldenCard = () => {
  const offerList = [
    "12 hours free streaming",
    " 7 week free subscription",
    " Anytime cancel the subscription",
    " 30 days backup plan",
  ];

  return (
    <Card
      name="premium card"
      offerLists={offerList}
      buttonText={"Golden Card"}
      divStyle={"border border-amber-500 border-b-4 border-l-4 rounded-md"}
      buttonStyle={
        "border border-2 border-amber-500 py-2 px-1 bg-amber-500 text-white text-md font-semibold rounded-md hover:text-amber-500 hover:bg-white transition-all duration-300 delay-100 m-4 "
      }
    />
  );
};

export default GoldenCard;
