function Total({ parts }) {
    return (
        <div className="bg-gray-200 p-4">
            <p className="text-lg font-semibold">
                Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
            </p>
        </div>
    )
}

export default Total;