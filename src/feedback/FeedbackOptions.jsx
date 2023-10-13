import { Good, Neutral, Bad } from "feedback/feedbackStyled";
function FeedbackOptions({ onClickButtons }) {
    return (
      <div className="btn-wrapper">
      <Good onClick={() => onClickButtons("Good")}>Good</Good>
      <Neutral onClick={() => onClickButtons("Neutral")}>Neutral</Neutral>
      <Bad onClick={() => onClickButtons("Bad")}>Bad</Bad>
    </div>
    );
  }
  
  export default FeedbackOptions;