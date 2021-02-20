import * as Styles from '../styles'
import getWeeksInMonth from '../utils'
import React, { useState, useEffect } from 'react'

function DateContent() {
  let weekContentList = getWeeksInMonth()
  let result = []
  return (
    <div className="DateContainer" style={Styles.DateContainer}>
      {weekContentList.map((week, wIdx) => {
        let aWeek = []
        week.map((day, dIdx) =>
          aWeek.push(
            <div
              className="dateContent-day d-flex flex-cloumn"
              style={Styles.dayStyle}
              key={`${day}-${dIdx}`}
            >
              {day === 0 ? '' : day}
              {/* <span>123</span> */}
            </div>
          )
        )
        result.push(
          <div
            className="aweek"
            style={Styles.aWeekStyle}
            key={`${week}-${wIdx}`}
          >
            {aWeek}
          </div>
        )
      })}
      {result}
    </div>
  )
}

export default DateContent
