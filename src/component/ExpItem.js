import './ExpItem.sass'



function ExpItem(props) {
  return (
    <div className="ExpItem__bound">
      <div className="ExpItem__title">{props.content.title}</div>
      <div className="ExpItem__bound__info">
        <h4 className="ExpItem__bound__info__place">{props.content.place}</h4>
        <h4 className="ExpItem__bound__info__time">{props.content.time}</h4>
      </div>
      <p>{props.content.content}</p>
    </div >
  );
}

export default ExpItem;
