import "./Receipt.css";
const Receipt = ({ person, order }) => {
  const { sauce, main, protein, rice, cost, drink } = order;
  return (
    <div className="receipt">
      <h1>{person}</h1>
      <h3>
        <div className="magenta">Main:</div> {main}
      </h3>
      <h3>Protein: {protein}</h3>
      <h3>
        <div className="magenta">Rice: </div>
        {rice}
      </h3>
      <h3>
        <div className="magenta">Sauce:</div> {sauce}
      </h3>
      <h3>
        <div className="magenta">Drink:</div> {drink}
      </h3>
      <h3>
        <div className="magenta">Cost:</div> {cost}
      </h3>
    </div>
  );
};
export default Receipt;
