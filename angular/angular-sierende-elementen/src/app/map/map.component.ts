import { Component, OnInit } from '@angular/core';
import { GeoPoint } from '../models/geopoint';
import { SierendeElementenService } from '../services/sierende-elementen.service';

declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: any;
  geoPoints: GeoPoint[] = [];
  markerSource = new ol.source.Vector({});
  
  markerStyle = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      opacity: 0.75,
      src: 'https://openlayers.org/en/v4.6.4/examples/data/icon.png'
    }))
  });
  
  constructor(private ses : SierendeElementenService) { }

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      // controls: ol.control.defaults({
      //   attributionOptions: {
      //     collapsible: false
      //   }
      // }).extend([mousePositionControl]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        new ol.layer.Vector({
          source: this.markerSource,
          style: this.markerStyle,
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([4.7683, 51.5719]),
        zoom: 8
      })
    });
  }

  showMarkers() {
    var layer = new ol.layer.Vector({source: this.markerSource})
    this.map.addLayer(layer);
    this.ses.getSierendeElementen().subscribe( items => {
      items.forEach( gp => {
        var marker = new ol.Feature({
          geometry: new ol.geom.Point([4.7683, 51.5719])
        })
        this.markerSource.addFeature(marker)
      })
    });
  }
  
}
