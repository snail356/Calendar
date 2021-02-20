// Calendar.js
import React from 'react'
import getWeeksInMonth from './utils'
import moment from 'moment'
import Header from './components/Header'
import WeekDay from './components/WeekDay'
import DateContent from './components/DateContent'

// 引入樣式
import * as Styles from './styles'

function Calendar() {
  let result = getWeeksInMonth()
  console.log('result:', result)
  return (
    <>
      <div>
        <h1>{'Calendar Demo'}</h1>
        <div className="calendar-container" style={Styles.calendarContainer}>
          <Header />
          <WeekDay />
          <DateContent />
        </div>
      </div>
    </>
  )
}

export default Calendar
