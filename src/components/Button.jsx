import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick,disabled, ...props }) => {

    return (
        <button className={styles.container} disabled={disabled} onClick={onClick} {...props}>
            {children}
        </button>
    )


}
export default Button