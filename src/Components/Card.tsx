interface CardProps {
  name: string;
  offerLists: Array<string>;
  buttonText: string;
  divStyle: string;
  buttonStyle: string;
}

const Card = ({
  name,
  offerLists,
  buttonText,
  divStyle,
  buttonStyle,
}: CardProps) => {
  return (
    <div className={divStyle}>
      <h3 className="font-bold text-2xl">{name}</h3>
      <ul className="list-disc list-inside text-left p-4 font-serif font-semibold">
        {offerLists.map((offerList: string) => {
          return <li key={offerList}>{offerList}</li>;
        })}
      </ul>
      <button className={buttonStyle}>{buttonText}</button>
    </div>
  );
};

export default Card;
