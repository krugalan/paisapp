import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function Document(props) {
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
          d="M18.1415 18.5327C18.7107 18.5327 19.1727 18.9833 19.1727 19.5385V20.7677C19.1727 23.963 16.5078 26.5625 13.2309 26.5625H6.70386C3.4216 26.5625 0.75 23.9564 0.75 20.7534C0.75 20.1982 1.21201 19.7488 1.78114 19.7488C2.35028 19.7488 2.81229 20.1982 2.81229 20.7534C2.81229 22.8487 4.55854 24.5508 6.70386 24.5508H13.2309C15.3708 24.5508 17.1104 22.8539 17.1104 20.7677V19.5385C17.1104 18.9833 17.5724 18.5327 18.1415 18.5327ZM27.2185 12.4931C27.6364 12.4931 28.0127 12.7387 28.172 13.1162C28.3314 13.4924 28.2417 13.9261 27.947 14.2135L24.034 18.0135C23.8318 18.2082 23.5694 18.3075 23.3056 18.3075C23.0417 18.3075 22.7766 18.2082 22.5757 18.0109C22.174 17.6164 22.174 16.9802 22.5784 16.5884L24.7224 14.5061H11.13C10.5609 14.5061 10.0975 14.0554 10.0975 13.5003C10.0975 12.9451 10.5609 12.4931 11.13 12.4931H27.2185ZM13.2177 0.4375C16.5013 0.4375 19.1729 3.04357 19.1729 6.24663V7.46279C19.1729 8.01666 18.7109 8.46734 18.1418 8.46734C17.5727 8.46734 17.1107 8.01666 17.1107 7.46279V6.24663C17.1107 4.15132 15.3644 2.44921 13.2177 2.44921H6.69207C4.55211 2.44921 2.81256 4.1474 2.81256 6.23226V16.1797C2.81256 16.7349 2.35055 17.1856 1.78141 17.1856C1.21227 17.1856 0.750268 16.7349 0.750268 16.1797V6.23226C0.750268 3.03704 3.41517 0.4375 6.69207 0.4375H13.2177ZM22.573 8.99365C22.9748 8.59653 23.6256 8.59392 24.0314 8.98581L25.017 9.9368C25.4227 10.3287 25.4254 10.9649 25.025 11.3594C24.8228 11.5579 24.5577 11.6585 24.2925 11.6585C24.03 11.6585 23.7676 11.5605 23.5667 11.3672L22.5797 10.4149C22.1753 10.0243 22.1726 9.38685 22.573 8.99365Z"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}

export default Document;
