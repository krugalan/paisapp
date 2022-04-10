import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Search(props) {
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
          d="M9.14342 17.2868C13.6409 17.2868 17.2868 13.6409 17.2868 9.14342C17.2868 4.64593 13.6409 1 9.14342 1C4.64593 1 1 4.64593 1 9.14342C1 13.6409 4.64593 17.2868 9.14342 17.2868Z"
          stroke={strokeColor}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.8073 15.2303L18 18.4146"
          stroke={strokeColor}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

export default Search;
