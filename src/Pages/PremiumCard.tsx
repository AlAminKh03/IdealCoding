import Card from "../Components/Card";

const PremiumCard = () => {
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
      buttonText={"Activate Premium"}
      divStyle={
        "border border-green-500 border-b-4 border-l-4 rounded-md shadow-md shadow-green-200"
      }
      buttonStyle={
        "border border-2 border-green-500 py-2 px-1 bg-green-500 text-white text-md font-semibold rounded-md hover:text-green-500 hover:bg-white transition-all duration-300 delay-100 m-4 "
      }
    />
  );
};

export default PremiumCard;
