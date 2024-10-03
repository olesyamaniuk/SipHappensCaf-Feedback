import css from "./Options.module.css"

import { BsEmojiGrinFill, BsEmojiNeutralFill, BsEmojiTearFill, BsEmojiSmileUpsideDownFill } from "react-icons/bs";

export default function Options({ onUpdate, resetFeedback, totalFeedback }) {
    return (
        <div className={css.feedback}>
            <button className={css.feedbackItem} onClick={() => onUpdate("good")}>
                <BsEmojiGrinFill className={css.icon} />Good</button>
            <button className={css.feedbackItem} onClick={() => onUpdate("neutral")}>
                <BsEmojiNeutralFill className={css.icon} />Neutral</button>
            <button className={css.feedbackItem} onClick={() => onUpdate("bad")}>
                <BsEmojiTearFill className={css.icon} />Bad</button>
            {totalFeedback > 0 && (
                <button className={css.feedbackReset} onClick={resetFeedback}>
                    <BsEmojiSmileUpsideDownFill className={css.icon} />Reset</button>
            )}
        </div>
    );
}
