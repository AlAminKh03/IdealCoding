import Card from "../Components/Card";

const Card1 = () => {
  const offerList = [
    "12 hours free streaming",
    " 7 week free subscription",
    " Anytime cancel the subscription",
    " 30 days backup plan",
  ];
  return (
    <div>
      <Card
        name={"Basic Card"}
        offerLists={offerList}
        buttonText="Activate Basic"
        divStyle=" border border-black border-b-4 border-l-4 rounded-md "
        buttonStyle={
          "border border-2 border-black py-2 px-1 bg-black text-white text-md font-semibold rounded-md hover:text-black hover:bg-white transition-all duration-300 delay-100 m-4 "
        }
      />
    </div>
  );
};

export default Card1;
