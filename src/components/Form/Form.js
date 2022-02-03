import React from 'react';
// Styles
import { form, fieldsWrapper, title, header, field, assent, checkmark } from './style.module.scss';
// children components
import { Link } from "gatsby";
import Button from '../Button/Button';

const Form = () => {

    return (
        <div className={form}>
            <h3 className={title}>Lorem ipsum <br /> Lorem ipsum lorem ipsum</h3>
            <p>consectetur adipiscing elit. Ut auctor arcu </p>
            <p className={header}>Zostaw kontakt, zadzwonimy do Ciebie</p>
            <form className={fieldsWrapper}>
                <input className={field} type="text" name="name" id="name" placeholder='Imię i nazwisko' />
                <input className={field} type="tel" name="phone" id="phone" placeholder='Telefon' />
                <input className={field} type="teemailxt" name="email" id="email" placeholder='Email' />
                <input className={field} type="text" name="message" id="message" placeholder='Lorem ipsum lorem ipsum' />
                <label className={assent} htmlFor="assent">Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych <Link to="#">więcej...</Link>
                    <input className={field} type="checkbox" name="assent" id="assent" />
                    <span className={checkmark}></span>
                </label>
                <Button>Wyślij</Button>
            </form>
        </div>
    )
}

export default Form;