import * as Styles from '../styles'
import getWeeksInMonth from '../utils'

function DateContent() {
  let weekContentList = getWeeksInMonth()
  let result = []
  return (
    <div className="DateContainer" style={Styles.DateContainer}>
      {weekContentList.map((week, wIdx) => {
        let aWeek = []
        week.map((day, dIdx) =>
          aWeek.push(
            <span
              className="dateContent-day"
              style={Styles.dayStyle}
              key={`${day}-${dIdx}`}
            >
              {day === 0 ? '' : day}
            </span>
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
