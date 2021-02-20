import getWeeksInMonth from '../utils'
import * as Styles from '../styles'
import { AppStore } from '../Calendar'
import moment from 'moment'
import React, { useReducer, createContext, useContext } from 'react'

export default function DateContent() {
  const { timeReducer } = useContext(AppStore)
  const date = timeReducer[0]
  const mmt = new moment(date)

  let weekContentList = getWeeksInMonth(mmt)
  let result = []
  return (
    <div className="DateContainer" style={Styles.DateContainer}>
      {weekContentList.map((week, wIdx) => {
        let aWeek = []
        aWeek = week.map((day, dIdx) => (
          <span
            className="dateContent-day"
            style={Styles.dayStyle}
            key={`${day}-${dIdx}`}
          >
            {day === 0 ? '' : day}
          </span>
        ))
        return (
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
