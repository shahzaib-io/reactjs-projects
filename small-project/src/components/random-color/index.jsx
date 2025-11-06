import { useEffect, useState } from "react"

export default function RandomColor() {
    const [color, setColor] = useState("#000");
    const [typeOfColor, setTypeOfColor] = useState('hex');
    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }
    function handleHexGenerator() {
        // #536246
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }
    function handleRgbGenerator() {
        // rgb(255,0,0)
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        const rgbColor = `rgb(${r},${g},${b})`;
        setColor(rgbColor);
    }
    useEffect(() => {
        if (typeOfColor === 'rgb')
            handleRgbGenerator()
        else
            handleHexGenerator()
    }, [typeOfColor]);
    return (
        <div className="container"
            style={{
                height: "100vh",
                width: "100vw",
                background: color
            }}
        >
            <button onClick={() => setTypeOfColor('hex')}>Generate HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleHexGenerator : handleRgbGenerator}>Generate Random Color</button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                flexDirection: 'column',
                fontSize: '40px',
                textAlign: 'center',
                color: '#fff',
                marginTop: '50px'
            }}>
                <h2>{(typeOfColor === 'rgb') ? 'RGB Color' : 'HEX Color'}</h2>
                <h2>{color}</h2>
            </div>
        </div>
    )
}