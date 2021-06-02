import {
  Map,
  TileLayer,
  Circle,
  CircleMarker,
  Polygon,
  Polyline,
  Rectangle,
  Popup /*, withLeaflet*/,
} from 'react-leaflet';
// import Curve from 'react-leaflet-curve';
import React from 'react';
import * as L from 'leaflet';

interface Props {}

export class PRTG extends React.Component<Props> {
  render() {
    const center: L.LatLngTuple = [51.505, -0.09];

    const polyline: L.LatLngTuple[] = [
      [51.505, -0.09],
      [51.51, -0.1],
      [51.51, -0.12],
    ];

    const multiPolyline: L.LatLngTuple[][] = [
      [
        [51.5, -0.1],
        [51.5, -0.12],
        [51.52, -0.12],
      ],
      [
        [51.5, -0.05],
        [51.5, -0.06],
        [51.52, -0.06],
      ],
    ];

    const polygon: L.LatLngTuple[] = [
      [51.515, -0.09],
      [51.52, -0.1],
      [51.52, -0.12],
    ];

    const multiPolygon: L.LatLngTuple[][] = [
      [
        [51.51, -0.12],
        [51.51, -0.13],
        [51.53, -0.13],
      ],
      [
        [51.51, -0.05],
        [51.51, -0.07],
        [51.53, -0.07],
      ],
    ];

    const rectangle: L.LatLngTuple[] = [
      [51.49, -0.08],
      [51.5, -0.06],
    ];
    const position: L.LatLngTuple = [51.505, -0.09];
    // const path = [
    //   'M',
    //   [50.14874640066278, 14.106445312500002],
    //   'Q',
    //   [51.67255514839676, 16.303710937500004],
    //   [50.14874640066278, 18.676757812500004],
    //   'T',
    //   [49.866316729538674, 25.0927734375],
    // ];
    return (
      <Map
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          height: '100%',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={center} fillColor="blue" radius={200} />
        <CircleMarker center={[51.51, -0.12]} color="red" radius={20}>
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <Polyline color="lime" positions={polyline} />
        <Polyline color="lime" positions={multiPolyline} />
        <Polygon color="purple" positions={polygon} />
        <Polygon color="purple" positions={multiPolygon} />
        <Rectangle bounds={rectangle} color="black" />

        {/* <Curve positions={path} option={{ color: 'red', fill: true }} /> */}
      </Map>
    );
  }
}
