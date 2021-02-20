// Calendar.js

//...
// Global Vars
const WeekDayNameList = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
//...
function WeekDay() {
  let weekDayList = [];
  return (
      <div style={Styles.weekDayContainerStyle}>
        {
          weekDayList = WeekDayNameList.map((name, idx)=>
          <span className="weekday-name" key={`name-${idx}`}
            style={Styles.weekDayStyle}>
            {name}
          </span>)
        }
      </div>
      );
}

//...

export default function Calendar() {
  return (
    <div>
      <h1>{"Calendar Demo"}</h1>
      <div className="calendar-container" style={Styles.calendarContainer}>
        <Header />
        <WeekDay />
      </div>
    </div>
  );
}