import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import AddColor from "./AddColor";
import Color from "./Color";

const initialState = [
  { red: "rgb(255,0,0)" },
  { green: "rgb(0,255,0)" },
  { blue: "rgb(0,0,255)" },
];

function App() {
  const [colors, setColors] = useState(() => {
    const savedColors = localStorage.getItem("colors");
    return savedColors ? JSON.parse(savedColors) : initialState;
  });
  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colors));
  }, [colors]);

  function addColor(newColor) {
    setColors([newColor, ...colors]);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/colors" replace />} />
        <Route path="/colors" element={<Home colors={colors} />} />
        <Route path="/addColor" element={<AddColor addColor={addColor} />} />
        {colors.map((val, idx) => {
          const colorName = Object.keys(val)[0];
          return (
            <Route
              key={idx}
              path={`/colors/${colorName}`}
              element={<Color color={Object.values(val)[0]} />}
            />
          );
        })}
        <Route path="*" element={<Navigate to="/colors" replace />} />
      </Routes>
    </>
  );
}

export default App;
