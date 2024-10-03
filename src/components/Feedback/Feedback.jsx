import css from "./Feedback.module.css"
import {BsEmojiGrinFill, BsEmojiNeutralFill, BsEmojiTearFill, BsEmojiSunglassesFill, BsEmojiHeartEyesFill } from "react-icons/bs";

export default function Feedback({
  value: { good, neutral, bad },
  totalFeedback
}) {
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

 const getEmoji = (positiveFeedback) => {
    if (positiveFeedback >= 80) {
      return <BsEmojiHeartEyesFill className={css.icon} />;
    } else if (positiveFeedback >= 50) {
      return <BsEmojiGrinFill className={css.icon} />;
    } else if (positiveFeedback >= 20) {
      return <BsEmojiNeutralFill className={css.icon} />;
    } else {
      return < BsEmojiTearFill className={css.icon} />;
    }
  };

  return (
    <div className={css.wrap}>
      <div className={css.feedback}>
        <p className={css.feedbackItem}><BsEmojiGrinFill className={css.icon} />Good: {good}</p>
        <p className={css.feedbackItem}><BsEmojiNeutralFill className={css.icon} />Neutral: {neutral}</p>
        <p className={css.feedbackItem}><BsEmojiTearFill className={css.icon} />Bad: {bad}</p>
        <p className={css.feedbackItem}><BsEmojiSunglassesFill className={css.icon} />Total feedback: {totalFeedback}</p>
        <p className={css.feedbackItem}>Positive: {positiveFeedback}% {getEmoji(positiveFeedback)}</p>
      </div>
    </div>
  );
}

