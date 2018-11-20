import { Component, OnInit } from '@angular/core';
import { GeoPoint } from '../models/geopoint';
import { SierendeElementenService } from '../services/sierende-elementen.service';
import { SierendElement } from '../models/sierendelement';
import { _getComponentHostLElementNode } from '@angular/core/src/render3/instructions';

declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: any;
  sierendeElementen: SierendElement[] = [];
 
  
  constructor(private ses : SierendeElementenService) { }

  ngOnInit() {
    var mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: 'EPSG:4326',
      // comment the following two lines to have the mouse position
      // be placed within the map.
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;'
    });

    this.map = new ol.Map({
      target: 'map',
      control: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([mousePositionControl]),
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

    this.map.on('click', function (args) {
      console.log(args.coordinate);
      var lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
      console.log(lonlat);
    });
  }

  showMarkers() {
    this.ses.getSierendeElementen().subscribe( items => {
      items.forEach( se => {
        let vectorLayer = new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [
              new ol.Feature({
                geometry: new ol.geom.Point(
                  ol.proj.transform([se.geometry.lng, se.geometry.lat],'EPSG:4326', 'EPSG:3857'))
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

