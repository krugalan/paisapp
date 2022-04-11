import * as React from "react";
import Svg, { Defs, G, Path, Rect } from "react-native-svg";

function LogoPaisapp(props) {
  const { height, width, scale, strokeColor, strokeWidth } = props;

  return (
    <Svg
    width={80} height={100} 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1.5}>
        <Rect x={0.587} width={48.825} height={48.825} rx={12} fill="#005CEE" />
        <Path
          d="M34.629 36.688a.591.591 0 0 0 .853-.009A15.243 15.243 0 1 0 15.6 38.87a.591.591 0 0 0 .835-.177.631.631 0 0 0-.18-.853 14.025 14.025 0 1 1 18.364-2.024.631.631 0 0 0 .01.872Z"
          fill="#fff"
        />
        <Path
          d="M35.048 36.236a.54.54 0 0 0 .78-.007 13.936 13.936 0 1 0-5.362 3.602.54.54 0 0 0 .302-.72.577.577 0 0 0-.734-.309 12.822 12.822 0 1 1 5.005-3.362.577.577 0 0 0 .01.797Z"
          fill="#fff"
        />
        <Path
          d="M35.328 35.645a.507.507 0 0 0 .732-.007 13.066 13.066 0 1 0-16.029 2.513c.251.142.567.04.699-.217a.54.54 0 0 0-.221-.713 12.02 12.02 0 1 1 14.81-2.323.541.541 0 0 0 .009.747Z"
          fill="#fff"
        />
        <Path
          d="M37.368 33.423c.24.1.516-.011.608-.254a11.76 11.76 0 0 0-16.888-14.322.456.456 0 0 0-.151.64c.139.22.429.285.654.155a10.819 10.819 0 0 1 15.517 13.16c-.09.244.02.52.26.62ZM19.587 20.489a.456.456 0 0 0-.657-.041 11.756 11.756 0 0 0-1.75 2.067.456.456 0 0 0 .148.642c.222.135.51.064.655-.152.45-.671.975-1.29 1.563-1.845a.487.487 0 0 0 .041-.671Z"
          fill="#fff"
        />
        <Path
          d="M36.433 34.651c.222.094.48-.01.565-.236a10.933 10.933 0 0 0-7.804-14.509.424.424 0 0 0-.508.342.453.453 0 0 0 .348.519 10.06 10.06 0 0 1 7.157 13.307.452.452 0 0 0 .242.577Z"
          fill="#fff"
        />
        <Path
          d="M34.755 36.748c.21.24.575.267.808.05a16.494 16.494 0 1 0-27.646-13.8.562.562 0 0 0 .525.616.595.595 0 0 0 .627-.534 15.338 15.338 0 1 1 25.737 12.845.595.595 0 0 0-.05.823Z"
          fill="#fff"
        />
        <Path
          d="M35.18 36.369c.226.185.56.154.736-.08A13.213 13.213 0 0 0 21.6 15.65a13.214 13.214 0 0 0-7.995 6.667.512.512 0 0 0 .25.697.547.547 0 0 0 .711-.255A12.158 12.158 0 1 1 35.1 35.618a.547.547 0 0 0 .081.751Z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export default LogoPaisapp;
