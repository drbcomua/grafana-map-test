import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';
// import { Map, TileLayer, Marker, Popup /*, withLeaflet*/ } from 'react-leaflet';
// import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import AntPath from 'react-leaflet-ant-path';
// import { Curve } from 'react-leaflet-curve';
// import * as RL from 'react-leaflet';
import { PRTG } from './PRTG';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles();
  // (RL as any).withLeaflet(Map);

  //   // Using a polygon
  // const antPolygon = antPath([
  //   [51.509, -0.08],
  //   [51.503, -0.06],
  //   [51.51, -0.047]
  // ], { use: L.polygon, fillColor: "red" });

  // // Using a circle
  // const antCircle = antPath(
  //   [51.508, -0.11],
  //   {
  //     use: L.circle
  //     color: 'red',
  //     fillColor: '#f03',
  //     fillOpacity: 0.5,
  //     radius: 500
  //   }
  // );

  // // Using a curve (Leaflet.curve plugin)
  // const antCurve = antPath([
  //   "M",
  //   [50.54136296522163, 28.520507812500004],

  //   "C",
  //   [52.214338608258224, 28.564453125000004],
  //   [48.45835188280866, 33.57421875000001],
  //   [50.680797145321655, 33.83789062500001],

  //   "V",
  //   [48.40003249610685],

  //   "L",
  //   [47.45839225859763, 31.201171875],
  //   [48.40003249610685, 28.564453125000004],

  //   "Z"
  //   ],
  //   {use: L.curve, color: "red", fill: true })

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      {/* <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        <g>
          <circle style={{ fill: `${theme.isLight ? theme.palette.greenBase : theme.palette.blue95}` }} r={100} />
        </g>
      </svg> */}
      <PRTG />
      <div className={styles.textBox}>
        {options.showSeriesCount && (
          <div
            className={css`
              font-size: ${theme.typography.size[options.seriesCountSize]};
            `}
          >
            Number of series: {data.series.length}
          </div>
        )}
        <div>Text option value: {options.text}</div>
      </div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});

// export default withLeaflet(SimplePanel);
