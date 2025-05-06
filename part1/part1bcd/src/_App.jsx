// import React from 'react'

// // Header 组件：显示课程名称
// function Header({ course }) {
//   console.log(course);

//   return <h1>{course}</h1>
// }

// // Part 组件：渲染单个部分
// function Part({ name, exercises }) {
//   return (
//     <p>
//       {name} {exercises}
//     </p>
//   )
// }

// // Content 组件：只渲染三个 Part 组件
// function Content({ parts }) {
//   return (
//     <div>
//       <Part name={parts[0].name} exercises={parts[0].exercises} />
//       <Part name={parts[1].name} exercises={parts[1].exercises} />
//       <Part name={parts[2].name} exercises={parts[2].exercises} />
//     </div>
//   )
// }

// // Total 组件：显示练习总数
// function Total({ parts }) {
//   const total = parts.reduce((sum, part) => sum + part.exercises, 0)
//   return <p>总计 {total} 个练习</p>
// }

// // App 组件：数据和结构
// function App() {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }

// export default App


import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>the app is used by pressing the buttons</div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      {/* <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button> */}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}

      {/* <p>{allClicks.join(' ')}</p> */}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App