import React, { useState } from "react";
import moment from "moment";
import './Calendar.css'

export default function Calendar({startDay, today}){

    const day = startDay.clone().subtract(1, 'day');
    const calendar = [...Array(35)].map(() => day.add(1, 'day').clone());
    const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    const [startInputDay, setStartInputDay] = useState('');
    const [endInputDay, setEndInputDay] = useState('');
    const [k, setK] = useState(true)

    function startonclick(day){
        setStartInputDay(day.format('MM-DD-YYYY'))
        setEndInputDay('')
        setK(false)
    }

    function endonclick(day){
        if(day.isSameOrAfter(startInputDay)){
            setEndInputDay(day.format('MM-DD-YYYY'))
            setK(true)
        } else{
            alert("Ошибка!")
        }
    }

    function zero(){
        setStartInputDay('')
        setEndInputDay('')
        setK(true)
    }

    


    return (
        <div>
            <div className="week">
                {week.map((weekItem) => (
                    <div className="weekItem" key={weekItem}>
                    {weekItem}
                    </div>
                ))}
            </div>
            <div className="calendar">
                {calendar.map((dayItem) => (
                    <div className={dayItem.day() === 6 || dayItem.day() === 0 ? "day cool" : "day"} style={dayItem.isSameOrAfter(startInputDay) && dayItem.isSameOrBefore(endInputDay) || dayItem.isSame(startInputDay) || dayItem.isSame(endInputDay) ? {backgroundColor: "#202f78"} : null} onClick={() => k ? startonclick(dayItem) : endonclick(dayItem)} key={dayItem}>
                        <div className={today.isSame(dayItem, 'month') ? "alldays" : "alldays otherMonth"}>
                            <span className={moment().isSame(dayItem, 'day') ? "today" : null}>{dayItem.format('D')}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="inputs">
                <div>
                    <label htmlFor="input1">Начальная дата:</label>
                    <input className="input" id="input1" type="text" placeholder="мм-дд-гггг" value={startInputDay} onChange={(event) => setStartInputDay(event.target.value)}/>
                    <label htmlFor="input2">Конечная дата:</label>
                    <input className="input" id="input2" type="text" placeholder="мм-дд-гггг" value={endInputDay} onChange={(event) => setEndInputDay(event.target.value)}/>
                    </div>
                    <button className="button2" onClick={() => zero()}>обнулить</button>
            </div>  
        </div>
    );
}