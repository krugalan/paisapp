import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";

function Checked(props) {
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
          fill={strokeColor}
          d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
        />
      </G>
    </Svg>
  );
}

export default Checked;
