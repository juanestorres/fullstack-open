import { useState } from 'react'



const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td> {text}: </td>
      <td>  {value} </td> 
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const all = () => good + neutral + bad
  const average = () => Math.round(((good - bad) / all()) * 100) / 100
  const positivePercentage = () => Math.round(good / all() * 100 * 100) / 100

  if (all() === 0) {
    return (
      <>
        <p> No feedback given </p>
      </>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="Good" value={good}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine text="Neutral" value={neutral}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine text="Bad" value={bad}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine text="All" value={all()}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine text="Average" value={average()}></StatisticLine>
          </tr>
          <tr>
            <StatisticLine text="Positive" value={positivePercentage()}></StatisticLine>
          </tr>
        </tbody>
      </table>



    </div>
  )
}

const Button = ({ label, value, updater }) => {
  return (
    <button onClick={() => updater(value + 1)}> {label} </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <>
      <div>
        <h2>Give feedback</h2>

        <Button label="Good" value={good} updater={setGood}></Button>
        <Button label="Neutral" value={neutral} updater={setNeutral}></Button>
        <Button label="Bad" value={bad} updater={setBad}></Button>

        <br></br>
      </div>

      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>

    </>
  )
}



export default App