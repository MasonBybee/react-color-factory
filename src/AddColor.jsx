import { useState } from "react";
import { useNavigate } from "react-router";

function AddColor({ addColor }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000000"); // Default color

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ [name]: color });
    navigate("/colors");
  };

  return (
    <>
      <div className="formDiv">
        <h1 className="formDiv-h1">Add A color!</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="textinput"
            type="text"
            placeholder="Color Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="colorinput"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit">Submit Color!</button>
        </form>
      </div>
    </>
  );
}

export default AddColor;
