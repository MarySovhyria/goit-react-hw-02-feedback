import { Good, Neutral, Bad } from "feedback/feedbackStyled";
function FeedbackOptions({ onClickButtons, options }) {

    return (
      <div className="btn-wrapper">
       {options.map((option) => (
    <button key={option} onClick={() => onClickButtons(option)}>
      {option}
    </button>
  ))}
      
    </div>
    );
  }
  
  export default FeedbackOptions;