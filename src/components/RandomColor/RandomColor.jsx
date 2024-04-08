import React, { useState } from "react"

const RandomColor = () => {
  const [color, setcolor] = useState()
  const [type, setType] = useState()

  const random = (length) => {
    return Math.floor(Math.random() * length)
  }
  const handleHex = () => {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ]
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
      hexColor += hex[random(hex.length)]
    }
    console.log("color is ", hexColor)
    setcolor(hexColor)
  }

  const handleRgb = () => {
    console.log("rgb")
    let r = random(255)
    let g = random(255)
    let b = random(255)
    let rgbColor = `rgb(${r},${g},${b})`
    setcolor(rgbColor)
  }

  return (
    <>
      <div style={{ backgroundColor: color, height: "100vh" }}>
        <button onClick={() => setType("hex")}>Hex Color</button>
        <button onClick={() => setType("rgb")}>RGB Color</button>
        <button onClick={type === "hex" ? handleHex : handleRgb}>
          Change Value
        </button>
        <h1>{`Type-${type}  ` + color}</h1>
      </div>
    </>
  )
}

export default RandomColor
