import React, { useState } from 'react';
import styles from './Game.module.css'
import Field from './Field';
import Button from '../components/Button';
import { checkResult, getRandomSelect } from '../utils';
import MagicButton from '../components/MagicButton';

const FIRST_FIELD_SIZE = 19;
const FIRST_FIELD_SELECTED_SIZE = 8;
const SECOND_FIELD_SIZE = 2;
const SECOND_FIELD_SELECTED_SIZE = 1;


const Game = () => {
    const [firstField, setFirstField] = useState([])
    const [secondField, setSecondField] = useState([])
    const [isSubmit, setSubmit] = useState(false)
    const [win, setWin] = useState(false)

    const submitHandle = () => {
        setSubmit(true)
        setWin(checkResult(firstField, FIRST_FIELD_SIZE, secondField, SECOND_FIELD_SIZE))
    }

    const randomSelectHanle = ()=>{
        setFirstField(getRandomSelect(FIRST_FIELD_SELECTED_SIZE,0,FIRST_FIELD_SIZE))
        setSecondField(getRandomSelect(SECOND_FIELD_SELECTED_SIZE,0,SECOND_FIELD_SIZE))
    }

    const submitView = win ? <span>👏🥳🤩 Вы выграли 👏🥳🤩</span> : <span>Вы проиграли 😭</span>

    const selectView = (
        <>
            <Field title="Поле 1" description="Отметьте 8 чисел." value={firstField} size={FIRST_FIELD_SIZE} selectedSize={FIRST_FIELD_SELECTED_SIZE} handleChange={setFirstField} />
            <Field title="Поле 2" description="Отметьте 1 число." value={secondField} size={SECOND_FIELD_SIZE} selectedSize={SECOND_FIELD_SELECTED_SIZE} handleChange={setSecondField} />
            <Button
                disabled={!Boolean(firstField.length === FIRST_FIELD_SELECTED_SIZE && secondField.length === SECOND_FIELD_SELECTED_SIZE)}
                onClick={submitHandle}
            >
                Показать результат
            </Button>
        </>
    )

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Билет 1</span>
                <MagicButton onClick={randomSelectHanle}/>
            </div>
            <div>
                {isSubmit ? submitView : selectView}
            </div>
        </div>
    )

}
export default Game