function App() {
  function create_ground() {
    let ground = [];
    for (let l = 0; l <= 4; l++) {
      ground[l] = [];
      for (let c = 0; c <= 4; c++) {
        ground[l][c] = "";
      }
    }
    return ground;
  }
  function moveRobot() {
    let x = 0, y = 0, control = "MM", cardinal_points = "N";
    let entry = control.split('');
    let count = 0;

    if (control === "") {
      return "informe a nova posição:";
    }

    let ground = create_ground();

    for (let i = 0; i <= entry.length; i++) {
      if ((entry[count] !== "M") && (entry[count] !== "R") && (entry[count] !== "L")) {
        return "Entrada inválida!";
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
    if ((x < 0) || (x > 4) || (y > 4) || (y < 0)) {
      return "Entrada inválida, robô fora do terreno!";
    }
    return "" + x + y + cardinal_points;
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
