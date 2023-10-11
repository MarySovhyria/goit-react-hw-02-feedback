import { Good, Neutral, Bad } from "feedback/feedbackStyled";
function FeedbackOptions({ onClickButtons }) {
    return (
      <div className="btn-wrapper">
        <Good
          onClick={e => onClickButtons(e.target.textContent)}
        >
          Good
        </Good>
        <Neutral
          onClick={e => onClickButtons(e.target.textContent)}
        >
          Neutral
        </Neutral>
        <Bad
          onClick={e => onClickButtons(e.target.textContent)}
        >
          Bad
        </Bad>
      </div>
    );
  }
  
  export default FeedbackOptions;