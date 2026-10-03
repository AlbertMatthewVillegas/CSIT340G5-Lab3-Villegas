import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
import Footer from './components/Footer'

function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const fullName = 'ALBERTMATTHEWVILLEGAS'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
        <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
