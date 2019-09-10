import React, { useState,useEffect} from 'react';
import styles from './Field.module.css';
import Cell from '../components/Cell';

const Field = ({ title = "Поле",value=[], description = "", size = 10, selectedSize = 1, handleChange = () => [] }) => {
    
    const [selected, setSelected] = useState(value);

    useEffect(() => {
        setSelected(value)
    }, [value])

    useEffect(() => {
        handleChange(selected)
    }, [handleChange, selected])

    const cellHandle = (index) => () => {
        if(selected.indexOf(index) === -1 && selected.length < selectedSize){
            setSelected([...selected, index])
        }else{
            setSelected(selected.filter(item=>item !== index))
        }
    }
    
    const cells = Array(...Array(size)).map((_, index) => (
        <Cell key={index} disabled={selected.length === selectedSize} number={index+1} isSelected={selected.indexOf(index)!== -1} handleChange={cellHandle(index)} />
    ))

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span  className={styles.title}>{title}</span>
                <span  className={styles.description}>{description}</span>
            </div>
            <div className={styles.cells}>
                {cells}
            </div>
        </div>
    )


}
export default Field