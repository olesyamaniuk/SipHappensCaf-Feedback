import css from "./Options.module.css"

export default function Options({ onUpdate, resetFeedback, totalFeedback }) {
    return (
        <div className={css.feedback}>
            <button className={css.feedbackItem} onClick={() => onUpdate("good")}>Good</button>
            <button className={css.feedbackItem} onClick={() => onUpdate("neutral")}>Neutral</button>
            <button  className={css.feedbackItem} onClick={() => onUpdate("bad")}>Bad</button>
            {totalFeedback > 0 && (
                <button className={css.feedbackReset } onClick={resetFeedback}>Reset</button>
            )}
        </div>
    );
}
