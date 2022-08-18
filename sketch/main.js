let color = [
    "#A0241D",
    "#E45719",
    "#1C3B52",
    "#02A4AA",
    "#AE2016",
    "#EE7C09",
    "#202843",
    "#1C0E07",
    "#E01811",
    "#E96A0C",
    "#FFD453",
  ];
  
  let color1 = ["#320E01", "#0266A0", "#1C3B52", "#212D5D"];
  let colorIndex = 0;
  
  function setup() {
    createCanvas(654, 800);
    fill("#320E01");
    //rect(0, 400, 654, 800);
    rect(0, 400, 654 / 2, 800 / 2);
    fill("#E64510");
    rect(width / 2, 400, 654 / 2, 800 / 2);
    fill("#02A4AA");
    rect(0, 600 - (800 - 795), 327, 500);
    fill("#212D5D");
    rect(width / 2, 600 - (800 - 795), 327, 500);
    fill("#212D5D");
    triangle(10, 800, 654 / 2, 800, 327, 415);
    fill("#02A4AA");
    triangle(654 / 2, 800, 645, 800, 327, 415);
  }
  let time = 0;
  
  function draw() {
    time += deltaTime;
    //background(255);
    //setup()
    //console.log(height/2);
  
    colorIndex = floor(map(mouseY, 0, width, 0, 10));
    if (colorIndex >= 10) {
      colorIndex = 0;
    }
    print(colorIndex);
  
    for (let i = 0; i < 11; i++) {
      fill(color[colorIndex]);
      // triangle(0, 1+40*(10-i)+800*abs(sin(TAU*time/5000)), 654, 1+40*(10-i)+800*tan(TAU*time/5000), 326.5, 366+40*(10-i)+800*tan(TAU*time/5000))
      triangle(
        0,
        1 + 40 * (10 - i),
        654,
        1 + 40 * (10 - i),
        326.5,
        366 + 40 * (10 - i)
      );
      colorIndex++;
      if (colorIndex >= 10) {
        colorIndex = 0;
      }
    }
  
    //borderLeftTop
    fill("#D64614");
    noStroke();
  
    beginShape();
    vertex(0, 0);
    vertex(327, 0);
    vertex(327, 33.42);
    vertex(37.4, 33.42);
    vertex(37.4, 400);
    vertex(0, 400);
    endShape(CLOSE);
    //borderRightTop
    fill("#CB1D1B");
    noStroke();
    beginShape();
    vertex(327, 0);
    vertex(327, 33.42);
    vertex(616.16, 33.42);
    vertex(616.16, 400);
    vertex(654, 400);
    vertex(654, 0);
    endShape(CLOSE);
    //borderLeftBottom
    noStroke();
    fill("#632011");
    beginShape();
    vertex(0, 400);
    vertex(37.4, 400);
    vertex(37.4, 766.58);
    vertex(327, 766.58);
    vertex(327, 800);
    vertex(0, 800);
    endShape(CLOSE);
    //borderLeftBottom
    noStroke();
    fill("#502815");
    beginShape();
    vertex(616.6, 400);
    vertex(654, 400);
    vertex(654, 800);
    vertex(327, 800);
    vertex(327, 766.58);
    vertex(616.6, 766.58);
    endShape(CLOSE);
    fill("#AF2C22");
    let move = 0.15 * abs(abs(mouseX - 400) - 400);
    //console.log(move);
    circle(327, 181, 165 + 20 * move * 0.012 * sin((TAU * time) / 500));
  }
  
  let colorIndex1 = 0;
  function mouseClicked() {
    colorIndex1++;
    if (colorIndex1 > 5) colorIndex1 = 0;
  
    //fill("#320E01");
    //rect(0, 400, 654, 800);
    fill(color[colorIndex1]);
    rect(0, 400, 654 / 2, 800 / 2);
    //fill("#E64510");
    fill(color[colorIndex1 + 1]);
    rect(width / 2, 400, 654 / 2, 800 / 2);
    //  fill("#02A4AA");
    fill(color[colorIndex1 + 2]);
    rect(0, 600 - (800 - 795), 327, 500);
    //  fill("#212D5D");
    fill(color[colorIndex1 + 3]);
    rect(width / 2, 600 - (800 - 795), 327, 500);
    fill(color[colorIndex1 + 4]);
    //  fill("#212D5D");
    triangle(10, 800, 654 / 2, 800, 327, 415);
    // fill("#02A4AA");
    fill(color[colorIndex1 + 5]);
    triangle(654 / 2, 800, 645, 800, 327, 415);
  }
  /*
  function mousePressed() {
    saveCanvas('myCanvas', 'png');
  }
  */