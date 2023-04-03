import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState([
    {
      taskId : 1,
      taskName : 'Clean the bathroom',
      taskStatus: 'Complete'
    },
    {
      taskId : 2,
      taskName : 'Learn filtering data in React',
      taskStatus: 'To do'
    },
    {
      taskId : 3,
      taskName : 'Fix the bug on React project',
      taskStatus: 'To do'
    },
    {
      taskId : 4,
      taskName : 'Fix the car',
      taskStatus: 'Complete'
    }
  ])
  return (
    <div>
      {
        data
        .filter((data)=>(
          data.taskName==='Fix the car'
        ))
        .map((data)=>(
          <li key={data.taskId}>{data.taskName}{data.taskStatus}</li>
        ))
      }

    </div>
  )
}

export default App