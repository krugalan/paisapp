import * as React from "react";
import Svg, { Circle, Defs, G, Path } from "react-native-svg";

function CardMaster(props) {
  const { height, width, scale, strokeColor, strokeWidth } = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="12.2229" cy="12.2229" r="12.2229" fill="#E9231A" />
      <Circle
        opacity="0.8"
        cx="21.7885"
        cy="12.2229"
        r="12.2229"
        fill="#E99418"
      />
    </Svg>
  );
}

export default CardMaster;
