/*global L:false*/

(function () {
    'use strict';

    L.TileLayer.Kartverket = L.TileLayer.extend({

        baseUrl: 'http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps',

        layers: ['matrikkel_bakgrunn', 'topo2', 'topo2graatone',
                 'europa', 'toporaster2', 'sjo_hovedkart2',
                 'kartdata2', 'norges_grunnkart',
                 'norges_grunnkart_graatone', 'egk'],

        initialize: function (layer, options) {
            if (this.layers.indexOf(layer) === -1) {
                throw new Error('Unknown layer "' + layer + '"');
            }
            options = options || {};
            var url = this.baseUrl + '?layers=' + layer + '&zoom={z}&x={x}&y={y}';

            options =  L.extend(
                {attribution: '&copy; <a href="http://kartverket.no">Kartverket</a>̈́'},
                options
            );
            L.TileLayer.prototype.initialize.call(this, url, options);
        }

    });

    L.tileLayer.kartverket = function (layer, options) {
        return new L.TileLayer.Kartverket(layer, options);
    };

    L.tileLayer.kartverket.getLayers = function () {
        return L.TileLayer.Kartverket.prototype.layers.slice();
    };

}());
