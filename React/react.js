const ff = () => {
    const action = () => {
        console.log("action");
    }
    return (
        <div>
            <p>Hello World</p>
            <button onClick={() => { action }}>Click Me!</button></div>
    )
}