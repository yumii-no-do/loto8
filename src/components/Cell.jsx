import React from 'react';
import styles from './Cell.module.css';
import classNames from 'classnames'

const Cell = ({ number = null, isSelected = false, disabled = false, handleChange = () => null }) => {

    return (
        <button onClick={handleChange} disabled={disabled && !isSelected} className={classNames(styles.container, isSelected && styles.selected)}>
            {number}
        </button>
    )


}
export default Cell