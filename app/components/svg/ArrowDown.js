import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";

function ArrowDown(props) {
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
        <Path d="M9 4H15V12H19.84L12 19.84L4.16 12H9V4Z" fill={strokeColor} />
      </G>
    </Svg>
  );
}

export default ArrowDown;
