import "./style.css";

function Panel(props) {
  return (
    <>
      <div className="panel">
        <div className="panel-top">
          <p className="name">{props.name}</p>
          <button onClick={props.setActiveMount} className="close-panel-btn">
            &#9747;
          </button>
        </div>
        <img src={props.image} alt={props.name} />
        <p className="description">{props.description}</p>
        <p>Location: {props.source}</p>
        <p>{props.owned} Owned</p>
      </div>
      <div onClick={props.setActiveMount} className="background"></div>
    </>
  );
}

export default Panel;
