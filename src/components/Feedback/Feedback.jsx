import css from "./Feedback.module.css"

export default function Feedback({
    value: { good, neutral, bad },
    positiveFeedback,
    totalFeedback
}) {
    return (
        <div className={css.wrap}>
            <div className={css.feedback}>
                <p className={css.feedbackItem}>Good: {good}</p>
                <p className={css.feedbackItem}>Neutral: {neutral}</p>
                <p className={css.feedbackItem}>Bad: {bad}</p>
                <p className={css.feedbackItem}>Total feedback: {totalFeedback}</p>
                <p className={css.feedbackItem}>Positive: {positiveFeedback}%</p>
            </div>
        </div>
    );
}
