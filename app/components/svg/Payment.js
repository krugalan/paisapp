import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";

function Payment(props) {
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
      <G scale={scale}>
        <Path
          d="M11 6H8V12H3V6H0L5.5 0L11 6ZM12.5 20L18 14H15V8H10V14H7L12.5 20Z"
          fill={strokeColor}
        />
      </G>
    </Svg>
  );
}

export default Payment;
