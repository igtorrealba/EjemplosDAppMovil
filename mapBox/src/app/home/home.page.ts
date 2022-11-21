import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from 'src/environments/environment';
import {MapaService} from 'src/app/servicios/mapa.service'

import{  Popup} from 'mapbox-gl';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
}) 
export class HomePage {

//public mapaBox: mapboxgl.Map;
public style ='mapbox://styles/ig-torrealba/cl9zyn79l002u14k6eozbqz39';

  constructor() {
    mapboxgl.accessToken = environment.MAPBOX_KEY;
    
  }

  ionViewDidEnter(){
    this.generarMapaBox();
  }
 
  ngOnInit(){

  };
  
  // longitud y latitud ......
  generarMapaBox(){
    const mapaBox = new mapboxgl.Map({
      container: 'mapaBox',
      style: this.style,
      zoom: 13,
      center: [-71.5518300, -33.0245700],
      projection: {
        name: 'mercator'
        }


    });
    mapaBox.resize();   
    mapaBox.addControl(new mapboxgl.NavigationControl());

    const popup = new Popup()
    .setHTML('<div>'+
    '<h4>mui wenas</h4>'+
    '<span>si</span>'+
    '</div>');

    const marker = new mapboxgl.Marker({
      
      draggable: false
      }).setLngLat([ -71.53299098234962,-33.03305958330198])
      .addTo(mapaBox)
      .setPopup(popup);

  

   

  };







}
