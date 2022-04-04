import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Notification(props) {
  const { height, width, scale, strokeColor = "#200E32", strokeWidth } = props;

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
         d="M1.00078 12.1978V11.9897C1.0313 11.3742 1.22857 10.7779 1.57224 10.2621C2.14428 9.64259 2.53587 8.88339 2.70593 8.06418C2.70593 7.43103 2.70593 6.78883 2.76123 6.15567C3.04696 3.1075 6.06091 1 9.038 1H9.11174C12.0888 1 15.1028 3.1075 15.3977 6.15567C15.453 6.78883 15.3977 7.43103 15.4438 8.06418C15.6162 8.88529 16.0074 9.64685 16.5775 10.2712C16.9237 10.7823 17.1213 11.3765 17.149 11.9897V12.1887C17.1695 13.0156 16.8847 13.822 16.3471 14.459C15.6366 15.2039 14.6725 15.6673 13.6373 15.7615C10.6016 16.0871 7.53888 16.0871 4.50324 15.7615C3.46919 15.6632 2.50647 15.2005 1.79345 14.459C1.2641 13.8215 0.983129 13.02 1.00078 12.1978Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
         d="M6.75218 18.9092C7.22649 19.5045 7.92302 19.8898 8.68761 19.9798C9.4522 20.0698 10.2218 19.857 10.8261 19.3886C11.012 19.25 11.1792 19.0889 11.3238 18.9092"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}


export default Notification;
