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
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([4.7683, 51.5719]),
        zoom: 12
      })
    });

    this.showMarkers();
  }

  showMarkers() {
    this.ses.getSierendeElementen().subscribe( items => {
      items.forEach( gp => {
        let vectorLayer = new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [
              new ol.Feature({
                geometry: new ol.geom.Point(
                  ol.proj.transform([gp.lng, gp.lat],'EPSG:4326', 'EPSG:3857'))
              })
            ]
          }),
          style: new ol.style.Style({
            image: new ol.style.Icon({
              anchor: [0.5, 0.5],
              anchorXUnits: "fraction",
              anchorYUnits: "fraction",
              src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg"
            })
          })
        });  
        this.map.addLayer(vectorLayer)
      })
    });
  }
}

