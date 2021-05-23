import './Progress.sass'



function Progress(props) {
  var style = {
    width: 8
  }
  return (
    <div className="Progress__bound">
      <h3>{props.content.title}</h3>
      <div className="Progressbar__bound">
        <div className="Progressbar__Progressback">
          <div className="Progressbar__ProgressFont" style={style} > </div>
        </div>
      </div>
    </div >
  );
}

export default Progress;
