import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={css.list}>
            <li className={css.list_item}>Good: {good}</li>
            <li className={css.list_item}>Neutral: {neutral}</li>
            <li className={css.list_item}>Bad: {bad}</li>
            <li className={css.list_item}>Total: {total}</li>
            <li className={css.list_item}>Positive feedback: {positivePercentage}%</li>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistics;