import { baseUnit, screenHeight, txtMedium, txtNormal, txtSmall } from "./base";
import { black, white } from "./colors";

const txtNormalCard = {
  fontSize: txtMedium,
  color: "white",
};
const txtNormalB = {
  fontSize: txtSmall,
  color: black,
};
const txtNormalBlack = {
  fontSize: txtNormal,
  color: black,
};
const txtNormalW = {
  fontSize: txtSmall,
  color: white,
};
const txtBigB = {
  fontSize: txtMedium,
  color: black,
};
const safeAreaView = {
  marginVertical: baseUnit * 2,
  paddingHorizontal: baseUnit * 5,
};

export {
  txtNormalCard,
  txtNormalB,
  txtNormalW,
  txtBigB,
  safeAreaView,
  txtNormalBlack,
};
