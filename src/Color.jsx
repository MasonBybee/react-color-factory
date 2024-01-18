function Color({ color }) {
  return (
    <div className="SolidColor" style={{ backgroundColor: color }}>
      <h1 className="SolidColor-h1">
        <a href="/colors">Home</a>
      </h1>
    </div>
  );
}

export default Color;
