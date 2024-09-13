
const Result = (item) => {
    const { result, text } = item;

    return (
        <div>
            <h2>{text} {result}</h2>
            <p>Made in GEEKS 2024</p>
        </div>
    );
}

export default Result;
