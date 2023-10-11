import { Container } from "feedback/feedbackStyled";
function Statistics({ good, bad, neutral, total, percent }) {
    return (
      <Container>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>
          {total === 0 ? (
            <span>Positive feedback: </span>
          ) : (
            <span>Positive feedback: {percent}%</span>
          )}
        </span>
      </Container>
    );
  }
  
  export default Statistics;