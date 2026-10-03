function Content({ part1, exercises1, part2, exercises2, part3, exercises3 }) {
    return (
        <div className="p-4">
            <p className="text-lg">{part1} {exercises1}</p>
            <p className="text-lg">{part2} {exercises2}</p>
            <p className="text-lg">{part3} {exercises3}</p>
        </div>
    );
}

export default Content;