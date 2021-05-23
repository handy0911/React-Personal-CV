import './InfoItem.sass'

function InfoItem(props) {
  return (
    <div className="InfoItem__bound">
      <div className="InfoItem__content">
        <div className="InfoItem__left">
          <img src={process.env.PUBLIC_URL + props.content.picpath} alt=""></img>
        </div>
        <div className="InfoItem__right">
          <h5>{props.content.title}</h5>
          <p>{props.content.content}</p>
        </div>
      </div>
    </div >
  );
}

export default InfoItem;
