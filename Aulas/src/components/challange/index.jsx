const Challange = () => {
    
    const a = 10;
    const b = 20;
    
    
    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <div>
                <button onClick={() => console.log(a + b)}> Somar!</button>
            </div>
        </div>
    )

    }
        



export default Challange;