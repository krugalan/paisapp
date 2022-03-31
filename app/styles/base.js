import {  
  PixelRatio, // Lo importo para trabajar sobre la unidad normalizada que creo.
  Dimensions /* Dimensions: obtengo el tamaño lógico en pixeles, no el fisico real. 
  Es decir, que si multiplico el scale (Device Pixel Ratio DPR) x width o height obtengo los pixeles fisicos reales del dispositivo. */,
} from "react-native";

const { height, width } = Dimensions.get("window");

const unitScale = width / (width * 0.8);

function normalize(size) {
  const newSize = size * unitScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const screenWidth = Math.round(width);
const screenHeight = Math.round(height);
const baseUnit = normalize(4);

export { screenWidth, screenHeight, baseUnit };
