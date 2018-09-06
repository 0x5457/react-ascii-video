interface IColor {
  blue: number;
  green: number;
  red: number;
};

const characters: string[] = "()[]/\\XS$_Z-0~#@|><+%&".split("");

export default (
  imageDate: ImageData,
  videoWidth: number,
  videoheight: number,
  charSize: {height: number, width: number},
  canvasCtx: CanvasRenderingContext2D
): void => {
  const { data, height, width } = imageDate;

  canvasCtx.clearRect(0, 0, videoWidth, videoheight);

  for (let y: number = 0; y < height; y += 2) {
    for (let x: number = 0; x < width; x++) {
      const offset = (y * width + x) * 4;
      const color = getColorAtOffset(data, offset);
      const character = getCharacter(getBrightness(color));
      canvasCtx.fillStyle = getColor(color);
      canvasCtx.fillText(character, x * charSize.width, y * charSize.height);
    }
  }
}

function getBrightness(color: IColor) {
  return (0.299 * color.red + 0.587 * color.green + 0.114 * color.blue) / 255;
}

function getCharacter(brightness: number): string {
  return characters[(characters.length - 1) - Math.round(brightness * (characters.length - 1))];
}


function getColorAtOffset(data: Uint8ClampedArray, offset: number): IColor {
  return {
    blue: data[offset + 2],
    green: data[offset + 1],
    red: data[offset],
  };
}

function getColor(color: IColor): string {
  return `rgb(${color.red.toFixed(0)}, ${color.green.toFixed(0)}, ${color.blue.toFixed(0)})`;
}