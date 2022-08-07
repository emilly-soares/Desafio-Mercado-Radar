function App() {
  function moveRobot() {
    let x = 0, y = 0, control = "MMRMMRMM", cardinal_points = "N";
    let entry = control.split('');
    let count = 0;

    let ground = [];
    for (let i = 0; i < 5; i++) {
      ground[i] = [];
      for (let j = 0; j < 5; j++) {
        ground[i][j] = "";
      }
    }
    while (count <= entry.length) {
      if (entry[count] === "M") {
        if (cardinal_points === "N") {
          ground[x][y] = "";
          y = y + 1;
          ground[x][y] = "R";
        }
        if (cardinal_points === "S") {
          ground[x][y] = "0";
          y = y - 1;
          ground[x][y] = "R";
        }
        if (cardinal_points === "W") {
          ground[x][y] = "";
          x = x - 1;
          ground[x][y] = "R";
        }
        if (cardinal_points === "E") {
          ground[x][y] = "";
          x = x + 1;
          ground[x][y] = "R";
        }
      } if (entry[count] === "L") {
        if (cardinal_points === "N") {
          cardinal_points = "W";
        } else
          if (cardinal_points === "S") {
            cardinal_points = "E";
          } else
            if (cardinal_points === "E") {
              cardinal_points = "N";
            } else
              if (cardinal_points === "W") {
                cardinal_points = "S";
              }
      }
      if (entry[count] === "R") {
        if (cardinal_points === "N") {
          cardinal_points = "E";
        } else
          if (cardinal_points === "S") {
            cardinal_points = "W";
          } else
            if (cardinal_points === "E") {
              cardinal_points = "S";
            } else
              if (cardinal_points === "W") {
                cardinal_points = "N";
              }

      }
      count++;
    }
    return "(" + x + y + cardinal_points + ")";
  }
  return (
    <div className="App-inicial">
      <div>
        {moveRobot()}
      </div>

    </div>
  );
}

export default App;

