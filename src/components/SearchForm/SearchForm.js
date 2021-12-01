import React, { useState } from 'react';
import '../SearchForm/SearchForm.css';

function SearchForm ({ onSearch }) {

    const [data, setData] = useState({
        location: '',
        date: '',
        days: ''
    });

    function handleChangeData(e) {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSearch(data);
    }

    return (
        <section className="form form_search">
            <form onSubmit={handleSubmit} className="container form__container" name='loginForm'>
                <label className="form__field">
                    <span className='form__field-text'>Локация</span>
                    <input  value={data.location} onChange={handleChangeData}
                            className='form__input'
                            type="text" 
                            name="location" />
                </label>
                <label className="form__field">
                    <span className='form__field-text'>Дата заезда</span>
                    <input  value={data.date} onChange={handleChangeData}
                            className='form__input form__input_calendar'
                            type="date"
                            name="date" />
                </label>
                <label className="form__field">
                    <span className='form__field-text'>Количество дней</span>
                    <input  value={data.days} onChange={handleChangeData}
                            className='form__input'
                            type="text" 
                            name="days" />
                </label>
                <button type="submit" className='form__button'>Найти</button>
            </form>
        </section>
    )
}

export default SearchForm;