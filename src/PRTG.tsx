import { Map, TileLayer, Marker, Popup /*, withLeaflet*/ } from 'react-leaflet';
// import { Curve } from 'react-leaflet-curve';
import React from 'react';
// import * as RL from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

interface Props {}

export class PRTG extends React.Component<Props> {
  //   createLeafletElement(props: Props): LeafletElement {
  //     return new LeafletElement(props.position);
  //   }

  //   updateLeafletElement(fromProps: Props, toProps: Props): void {}
  render() {
    const position: LatLngTuple = [51.505, -0.09];
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
        {/* <Curve
          positions={[
            'M',
            [50.54136296522163, 28.520507812500004],

            'C',
            [52.214338608258224, 28.564453125000004],
            [48.45835188280866, 33.57421875000001],
            [50.680797145321655, 33.83789062500001],

            'V',
            [48.40003249610685],

            'L',
            [47.45839225859763, 31.201171875],
            [48.40003249610685, 28.564453125000004],

            'Z',
          ]}
          options={{ color: 'red', fill: true }}
        ></Curve> */}
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

// (RL as any).withLeaflet(PRTG);
