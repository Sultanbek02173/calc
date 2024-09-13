
const Result = (item) => {
    const { result, text } = item;

    return (
        <div>
            <h2>{text} {result}</h2>
        </div>
    );
}

export default Result;
