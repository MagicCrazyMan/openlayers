import Map from '../../../../src/ol/Map.js';
import View from '../../../../src/ol/View.js';
import TileLayer from '../../../../src/ol/layer/WebGLTile.js';
import GeoTIFF from '../../../../src/ol/source/GeoTIFF.js';

const source = new GeoTIFF({
  transition: 0,
  convertToRGB: true,
  sources: [{url: '/data/raster/non-square-pixels.tif'}],
});

new Map({
  target: 'map',
  layers: [new TileLayer({source})],
  view: new View({
    center: [0, 0],
    zoom: 0,
    rotation: -Math.PI / 6,
  }),
});

render({
  message: 'renders reprojected',
});
