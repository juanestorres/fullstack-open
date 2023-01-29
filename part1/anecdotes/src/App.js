import { useState } from 'react'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes]= useState(new Uint8Array(anecdotes.length))

  const updateVotes = (selected) => {
    const copy = [...votes]
    copy[selected]+=1
    return copy
  }

    const i = votes.indexOf(Math.max(...votes));
  

  console.log(votes)
  console.log(selected)

  return (
    <div>
      <h2> Anecdote of the day </h2>
      {anecdotes[selected]}
      <br></br>
      <p>has {votes[selected]} votes</p>
      <br></br>
      <button onClick={() => {setVotes(updateVotes(selected))}}>Vote</button>
      <button onClick={() => {setSelected(getRandomInt(0, anecdotes.length))}}> Next anecdote</button>
      <h2> Anecdote with the most votes </h2>
      <p> {anecdotes[i]}</p>
      <p>has {votes[i]} votes</p>
    </div>
  )
}

export default App