import React from 'react';


export class Index extends React.Component {
  currentLocation() {
   Tracker.autorun(() => {
    const currentLocation = Geolocation.latLng();
    if (currentLocation) {
      alert(`Lat: ${currentLocation.lat.toFixed(2)} // Lng: ${currentLocation.lng.toFixed(2)}`)
    }
   });
  }

  componentWillMount() {
    GoogleMaps.load({ key: 'AIzaSyAJYsUQJGknptrOcD43JztqX3hF8TgvjSc' });

    Tracker.autorun(() => {
      if (GoogleMaps.loaded()) {
        console.log('google maps loaded!');
        GoogleMaps.create({
          name: 'caseteMap',
          element: document.getElementById('map-container'),
            options: {
            center: new google.maps.LatLng(29.7614528, -95.4791437),
            zoom: 10,
          }
        });
      }
    })
  };
  componentDidMount() {
    GoogleMaps.ready('caseteMap', function(map) {
       Tracker.autorun(() => {
        let marker;
        const zoom = 20;
        const latLng = Geolocation.latLng()
        if (latLng) {
          if (!marker) {
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(latLng.lat, latLng.lng),
              map: map.instance,
            });
          } else {
            marker.setPosition(latLng);
          }
          map.instance.setCenter(marker.getPosition());
          map.instance.setZoom(zoom);
        } 
     
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Index</h1>
        <div>{this.currentLocation()}</div>
        <div id="map-container"></div>
        {this.props.children}
      </div>
    )
  }
}
  