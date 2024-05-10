import React from "react";
import './CalHeader.css'
import moment from "moment";

export default function CalHeader({today, prev, now, next, year, setYear}){

    return(
        <div>
            <div className="CalHeader">
                <div className="right">
                    <div className="monthInfo">
                        <div className="month">{today.format('MMMM')}</div>
                        <div className="year">{today.format('YYYY')}</div>
                    </div>
                    <button className="button" style={{marginTop: "5px"}} onClick={now}>сегодня</button>
                </div>
                <div className="mounthButtons">
                    <button className="button" onClick={prev}>&lt;</button>
                    <button className={year === 'year' ? "button active" : "button"} onClick={() => year === 'month' & setYear('year')}>год</button>
                    <button className={year === 'month' ? "button active" : "button"} onClick={() => year === 'year' & setYear('month')}>месяц</button>
                    <button className="button" onClick={next}>&gt;</button>
                </div>
            </div>
        </div>
    )
}
