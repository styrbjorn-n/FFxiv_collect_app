import "./style.css";

function Panel(props) {
  return (
    <>
      <div className="background">
        <div className="panel">
          <div className="image-container">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <button>X</button>
          </div>
          <p className="description">{props.description}</p>
          <ul>
            <li>{props.owned}</li>
            <li>{props.source}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Panel;
