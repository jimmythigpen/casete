import React from 'react';


export class Index extends React.Component {
  componentWillMount() {
    GoogleMaps.load({ key: 'AIzaSyAJYsUQJGknptrOcD43JztqX3hF8TgvjSc' });
  };
  componentDidMount() {
    Tracker.autorun(() => {
      if (GoogleMaps.loaded()) {
        console.log('loaded!');
        GoogleMaps.create({
          name: 'caseteMap',
          element: document.getElementById('map-container'),
            options: {
            center: new google.maps.LatLng(29.7614528, -95.4791437),
            zoom: 10
          }
        });
      }
    })
  };
  render() {
    return (
      <div>
        <h1>Index</h1>
        <div id="map-container"></div>
        {this.props.children}
      </div>
    )
  }
}