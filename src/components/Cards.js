import "./Cards.scss";
import { ReactComponent as Ellipsis } from "../images/icon-ellipsis.svg";

const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((item, idx) => (
        <div key={idx} className={`card ${parseClassName(item.title)}`}>
          <div className="card-details">
            <div className="card-header">
              <h1>{item.title}</h1>
              <div className="card-more">
                <Ellipsis />
              </div>
            </div>
            <div className="card-content">
              <h1>{item.current}hrs</h1>
              <p>
                Last {item.period} - {item.previous}hrs
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

function parseClassName(name) {
  const splitName = name.split(" ");

  if (splitName.length > 1)
    return `${splitName[0].toLowerCase()}-${splitName[1].toLowerCase()}`;
  return name.toLowerCase();
}
