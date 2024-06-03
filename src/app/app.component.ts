import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'google-map-demo';
  @ViewChild('myGoogleMap', { static: true }) map!: GoogleMap;
  mapOptions: google.maps.MapOptions = {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 2,
    zoomControl:true,
    backgroundColor:"'#abdbfe'",
    disableDefaultUI:true,
    controlSize:26
  };
  markers: MarkerProperties[] = [
    { position: { lat: 28.6139, lng: 77.2088 }}, // new delhi
    { position: { lat: 17.4065, lng: 78.4772 }}, // hyderabad
    { position: { lat: 19.0760, lng: 72.8777 }}, // mumbai
  ];
  readonly mapInitialized!: EventEmitter<google.maps.Map>;
  constructor() {}

  ngOnInit(): void {}

  handleMapInitialized(map: google.maps.Map) {
    this.markers.forEach((marker: MarkerProperties) => {
      new google.maps.Marker({
        position: marker.position,
        map,
      });
    });
    this.map.data.setStyle({
      strokeColor: '#2879DE',
      fillColor: '#d8ebf9',
      fillOpacity: 0.65,
      strokeOpacity: 0.75,
      strokeWeight: 2,
      zIndex: 1,
    })
  }

  mapReady(evt:any) {
    this.map = evt;
    this.map.data.setStyle({
      strokeColor: '#2879DE',
      fillColor: '#d8ebf9',
      fillOpacity: 0.65,
      strokeOpacity: 0.75,
      strokeWeight: 2,
      zIndex: 1,
    });
  }
}
