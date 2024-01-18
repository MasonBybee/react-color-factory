function Home(props) {
  return (
    <>
      <div className="Home-navdiv">
        <h2 className="Home-div-Welcome">Welcome to the color factory!</h2>
        <h1 className="Home-div-addAColor">
          <a className="Home-div-addAColor-a" href="/addColor">
            Add a Color
          </a>
        </h1>
      </div>
      <div className="Home-colors">
        <h3 className="Home-colors-h3">Please Select a Color</h3>
        <ul>
          {props.colors.map((val, idx) => {
            return (
              <li key={idx}>
                <a href={`/colors/${Object.keys(val)}`}>{Object.keys(val)}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
