import React, { useState } from "react";
import moment from "moment";
import 'moment/locale/ru';
import Calendar from "./components/Calendar/Calendar";
import CalHeader from "./components/CalHeader/CalHeader";

export default function App() {

  
  moment.updateLocale('ru', {week: {dow: 1}});
  const [today, setToday] = useState(moment().locale("ru"));
  const startDay = today.clone().startOf('month').startOf('week');

  const [year, setYear] = useState('month');

  const prev = () => {
    setToday(prev => prev.clone().subtract(1, year))
  }
  const now = () => {
    setToday(moment())
  }
  const next = () => {
    setToday(prev => prev.clone().add(1, year))
  }
   
  return (
    <div className="App" style={{maxWidth: "490px", backgroundColor: "#1f1f1f", margin: "0 auto", color: "#fff"}}>
      <CalHeader today={today} prev={prev} now={now} next={next} year={year} setYear={setYear} />
      <Calendar startDay={startDay} today={today}/>
    </div>
  );
}

 
