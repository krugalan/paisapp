import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";

function ArrowBack(props) {
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
      <G scale={1.3}>
        <Path
          d="M8.67049 0.313814C9.10983 0.732233 9.10983 1.41062 8.67049 1.82904L2.71599 7.5L8.67049 13.171C9.10983 13.5894 9.10983 14.2678 8.67049 14.6862C8.23116 15.1046 7.51884 15.1046 7.07951 14.6862L0.329505 8.25761C-0.109835 7.8392 -0.109835 7.1608 0.329505 6.74239L7.07951 0.313814C7.51884 -0.104605 8.23116 -0.104605 8.67049 0.313814Z"
          fill={strokeColor}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </G>
    </Svg>
  );
}


export default ArrowBack;
