import * as React from 'react';
import {Path, Svg, G} from 'react-native-svg';

function Show(props: React.SVGProps<SVGSVGElement>) {
  const {width = 18, height = 18, color = '#130F26', fill = 'none'} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={fill}>
      <G id="Iconly/Light/Show">
        <G id="Show">
          <Path
            id="Stroke 1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            id="Stroke 3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48885 15.806 4.75085 11.998 4.75085H12.002C8.194 4.75085 4.711 7.48885 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
    </Svg>
  );
}

export default Show;
