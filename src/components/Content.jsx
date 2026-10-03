import Part from './Part'

function Content({ parts }) {
  return (
    <div className="p-4">
        {parts.map((part) => (
            <Part key={part.id} part={part} />
        ))}
    </div>
  )
}

export default Content